import './App.scss';
import {useState} from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HeroInfo from './components/HeroInfo/HeroInfo';
import CommentList from './components/CommentList/CommentList';
import Avatar from './assets/Images/Mohan-muruge.jpg';
import videoData from './data/video-details.json'



function App() {

  const [data] = useState(videoData[0]);

  return (
    <>
    <Header />
    <Hero poster={data.image} />
    <HeroInfo heroVideo={data} />
      <p className="article__comment">3 comments</p>
      <section className="conversation" >
        <img 
          className="conversation__avatar" 
          src={Avatar} 
          alt="avatar" />    
      <form className="conversation__form">
        <label className="conversation__title">join the conversation</label>
        <textarea
          className="conversation__box"
          placeholder="Add a new comment"
          name="comment"
          id="comment"
          cols="30"
          rows="5"
        ></textarea>
        <button 
          className="conversation__button" 
          type="submit"
        >comment</button>
        </form>
        </section>
        <CommentList />
    </>
  );
}

export default App;
