import './App.scss';
import {useState} from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Avatar from './assets/Images/Mohan-muruge.jpg';
import videoData from './data/video-details.json'



function App() {

  const [data, setData] = useState(videoData);
  console.log(videoData);

  return (
    <>
    <Header />
    <Hero />
    <main>
      <div className="rating">
        <h1 className="rating__header">BMX Rampage: 2021 Highlights</h1>
        <div className="rating__container">
          <div className="rating__date-title">
            <p className="rating__item rating__item--bold">By Red Crow</p>
            <p className="rating__item">07/11/2021</p>
          </div>
          <div className="rating__view-likes">
            <p className="rating__item">1,001,023</p>
              <p className="rating__item">110,985</p>
            </div>
        </div>
      </div>
      <section className="article">
        <p>
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title
          </p>
          <p className="article__comment">3 comments</p>
      </section>
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
        <ul className="conversation__list" ></ul>
        </main>
    </>
  );
}

export default App;
