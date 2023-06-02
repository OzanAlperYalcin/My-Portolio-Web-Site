import Section from "../components/Section"
import About from "../components/About"
import Skills from "../components/Skills"

function Home() {
    return (
        <div>
            <Section 
                title={"Welcome to my portfolio."}
                description={"On this page, I am going to talk about my daily life, my hobbies, the things that I like or dislike, the events that I live, the music that I listen to, and of course coding as far as I know.."}
                social={true}
            />
            <About />
            <Skills />
        </div>
    )
}

export default Home