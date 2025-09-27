import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient"; 
import { fetchChallenges } from "../fetchChallenges";

export default function Challenges(){

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [challenges, setChallenges] = useState([])

  useEffect(() => {
      const main = async () => {
        const all_data = await fetchChallenges()
        console.log(all_data)
        setChallenges(all_data)
      }
      main();
    }, [])

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Upload file to Supabase storage
const handleUpload = async () => {
    try {
      if (!file) {
        alert("Please select a file first!");
        return;
      }

      setUploading(true);

      // 1. Get logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      console.log("User:", user, "Error:", userError);

      if (userError || !user) {
        throw new Error("User not logged in");
      }

      // 2. Unique file path
      const filePath = `uploads/${user.id}/${Date.now()}_${file.name}`;

      // 3. Upload file to Supabase storage
      const { error: uploadError } = await supabase.storage
        .from("images") // bucket name
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // 4. Get public URL
      const { data: urlData } = supabase.storage
        .from("images")
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;
      setImageUrl(publicUrl);

      // 5. Insert into user_images table with user_id
      // const { error: dbError } = await supabase
      //   .from("user_images")
      //   .insert([{ user_id: user.id, image_url: publicUrl }]);
      const { error: dbError } = await supabase
      .from("user_images")
      .insert([{ user_id: user.id, image_url: publicUrl }]);
      console.log("DB Error:", dbError);


      if (dbError) throw dbError;

      alert("Upload successful!");
    } catch (err) {
      console.error("Upload error:", err.message);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  }; 
  return (
    <div className="flex flex-col gap-4">
    <div className="text-5xl font-fredoka font-semibold">Challenges & Quizzes
    </div>
    <div className="w-full grid grid-cols-4 gap-4 font-fredoka">
      {challenges.map(challenge => <ChallengeCard challenge={challenge} />)}
    </div>
    </div>
  );

function ChallengeCard({challenge}){
  return <div className="border-1 border-gray-300 px-4 py-2 rounded-md h-full justify-between shadow-md flex flex-col gap-2">
    <div className="flex flex-col gap-3 h-full">
      <h1 className="text-3xl font-fredoka">{challenge.name}</h1>
      <p>{challenge.description}</p>
    </div>
    <button className="hover:bg-green-500 transition-all duration-300 hover:cursor-pointer px-4 py-2 bg-green-300 flex items-center text-center justify-center rounded-md">Start Challenge</button>
  </div>
}

function UploadImg(){
  return <div className="p-6 border rounded-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Upload Your Challenge Image</h2>
      
      <input type="file" accept="image/*" onChange={handleFileChange} />
      
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {imageUrl && (
        <div className="mt-4">
          <p className="text-green-600">Image uploaded successfully!</p>
          <img src={imageUrl} alt="Uploaded" className="mt-2 w-48 rounded shadow" />
        </div>
      )}
    </div>
}

  // return <div className="font-fredoka w-full flex-1">challenges</div>
}