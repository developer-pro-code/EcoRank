export default function Card({src, heading, desc, level, ecoPoints, time, }){
  return <div>
    <img src={src} alt="" />
    <h1>{heading}</h1>
    <span>{level}</span>
    <p>{desc}</p>
    <div>
      <span>{ecoPoints}</span>
      <span>{time}</span>
    </div>
    <button>Resume</button>
  </div>
}