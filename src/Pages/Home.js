// Components
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ProjectCard from "../Components/ProjectCard";
import projects from "../Data/projects.json";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <Hero />
      <div className="bg-gray-50 p-16">
        <ProjectCard
          id="kaplanlj"
          name="Learner Journey"
          logo="kaplan"
          logoheight="40"
          casestudy={true}
          roles={["Researcher"]}
        >
          <p>
            Provide a new framework for Kaplan to understand their 1M+ learners
            by answering the following questions:
          </p>
        </ProjectCard>
        <ProjectCard
          id="modusks"
          name="Kickstart Practice Reboot"
          logo="modus"
          logoheight="20"
          casestudy={true}
          roles={["Strategist", "Designer"]}
        >
          <p>
            Kickstart is an engagement that helps product development teams
            rapidly explore new product ideas and align around good lean product
            devlopment practices.
          </p>
          <p>
            I was charged with evaluating, redesigning, and documenting the
            practice for training and marketing purposes.
          </p>
        </ProjectCard>
      </div>
    </div>
  );
};

export default Home;
