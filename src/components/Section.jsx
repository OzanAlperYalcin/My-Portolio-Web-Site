import Social from "./Social"

function Section({title, description, social = false}) {

  return (
    <div className='container mx-auto bg-third/1 border border-third/20 rounded-lg p-6 lg:p-10'>
        <h1 className='text-lg lg:text-3xl font-bold'>{title}</h1>
        <p className='text-gray-400 py-4'>{description}</p>
        {social && <Social size={30} />}
    </div>
  )
}

export default Section