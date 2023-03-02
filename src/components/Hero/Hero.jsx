import './Hero.scss';

const Hero = function (props) {
    return (
        <section className="hero">
      <video 
    controls poster={props.poster}>
    </video>
    </section>
    )
}

export default Hero;