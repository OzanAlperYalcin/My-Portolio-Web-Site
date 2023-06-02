import Title from "./Title"
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa"

function About() {
  return (
    <div className="container mx-auto">
      <Title>About Me</Title>
      <div className="grid gap-y-3 border border-white/20 rounded-lg p-10 lg:p-12 tracking-wide italic relative">
        <FaQuoteLeft className="absolute top-3 left-3 text-gray-400/20" size={50}/>
        <FaQuoteRight className="absolute bottom-3 right-3 text-gray-400/20" size={50}/>
        <p>
          I graduated from Trakya University, department of translation and interpreting. And I know English very well.. But It was not enough for me and I wanted to follow my childhood passion.
        </p>
        <p>
          I have had an interest in technology since I was a child. I am improving myself by watching videos and reading documents. 
          I decided to turn my interest in technology into a profession and I have been improving myself in the field of Frontend for about 1 year.
          I am ambitious, passionate and a quick learner. I care a lot about learning new things and improving my skills.
        </p>
      </div>
    </div>
  )
}

export default About