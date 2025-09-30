import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://bmmrprstsymncljksbil.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtbXJwcnN0c3ltbmNsamtzYmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NjE3NDYsImV4cCI6MjA3NDEzNzc0Nn0.YTirrcAk3wWje0-tLW-E7T6GNHBgBRPEoBI26uwUjrY')


const challenges = [
  {
    id: 1,
    name: "Water Pollution Prevention",
    description: "Protect water bodies from harmful chemicals and waste.",
    task: "Collect wastewater from your home (like from washing vegetables) and reuse it for watering plants instead of letting it flow away."
  },
  {
    id: 2,
    name: "Saving Energy",
    description: "Reduce unnecessary electricity usage and save resources.",
    task: "Switch off all electrical appliances in your room for one hour and notice how much difference it makes."
  },
  {
    id: 3,
    name: "Reduce Plastic Usage",
    description: "Cut down on single-use plastics in daily life.",
    task: "Carry a cloth bag to the market and avoid taking any plastic bag from shops today."
  },
  {
    id: 4,
    name: "Tree Plantation",
    description: "Improve air quality and support biodiversity by planting greenery.",
    task: "Plant one sapling near your home or community park and water it regularly."
  },
  {
    id: 5,
    name: "Waste Segregation",
    description: "Separate biodegradable and non-biodegradable waste.",
    task: "Create two dustbins at home – one for wet waste and another for dry waste – and use them for a full day."
  },
  {
    id: 6,
    name: "Eco-friendly Transport",
    description: "Minimize carbon emissions from vehicles.",
    task: "Use a bicycle, walk, or carpool instead of taking a personal vehicle for at least one trip today."
  },
  {
    id: 7,
    name: "Water Conservation",
    description: "Prevent wastage of clean drinking water.",
    task: "Fix one leaking tap at home or remind your family to close the tap while brushing teeth."
  },
  {
    id: 8,
    name: "Biodiversity Protection",
    description: "Preserve natural habitats and wildlife.",
    task: "Put a bowl of water outside for birds and small animals in your area."
  },
  {
    id: 9,
    name: "Sustainable Agriculture",
    description: "Promote eco-friendly farming practices.",
    task: "Make compost from kitchen waste like vegetable peels and learn how it can be used for gardening."
  },
  {
    id: 10,
    name: "Air Pollution Reduction",
    description: "Keep the air clean for healthier living.",
    task: "Avoid burning waste today and instead find a way to recycle or compost biodegradable materials."
  }
];


async function insertLessons() {
  const { data, error } = await supabase
    .from('challenges')
    .insert(challenges)

  if (error) console.error(error)
  else console.log("Inserted:", data)
}

insertLessons();