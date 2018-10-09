import React, { Component } from 'react';
import Header from './Header';
import Container from './Container';
import images from '../images';
import Footer from './Footer'



class ClickyGame extends Component {

  state = {
    score: 0,
    highScore: 0,
    msgColor: '',

    
    alertMessage: '',

    clickStatus: [],

    allBois: this.shuffleImages() 
  };

  clickEvent = this.checkClicked.bind(this);



  shuffleImages() {
    
    const imageArr = images.slice();


    const newArray = [];

   
    while (imageArr.length > 0) {
      newArray.push(imageArr.splice(Math.floor(Math.random() * imageArr.length), 1)[0]);
    }

    return newArray;
  }

  checkClicked(clickedElem) {
    
    const prevState = this.state.clickStatus.slice();

    // shuffles the images
    const shuffled = this.shuffleImages();

    
    let score = this.state.score;
    let highScore = this.state.highScore;


    if (!this.state.clickStatus.includes(clickedElem)) {
      
      if (score === highScore) {
        score++;
        highScore++;

        // if not equal increase score value
      } else {
        score++;
      }

      
      prevState.push(clickedElem);
    }

   
    if (this.state.clickStatus.includes(clickedElem)) {
      alert("H o w  d o e s  i t  f e e l  t o  l o s e ?")
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        alertMessage: 'W R O N G!',
        msgColor: 'red',
        allBois: shuffled,
        //change clickStatus back to empty array
        clickStatus: [],
      });

    }

    // score is increased if same image is not clicked 
    this.setState({
      score: score,
      highScore: highScore,
      alertMessage: 'C o r r e c t !',
      allBois: shuffled,
      msgColor: 'green',
      clickStatus: prevState,
    });

    if(score && highScore === 12){
      alert("Y O U  W I N ! ! !  Click an image to play again")
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        allBois: shuffled,
        //change clickStatus back to empty array
        clickStatus: [],
      });
    }
  }

    render() {
      const state = this.state;

      return (
        <div>

          <Header
            msgColor={state.msgColor}
            score={state.score}
            highScore={state.highScore}
            alertMessage={state.alertMessage}
          />
          <Container
          spookyBois={state.allBois}
          clickEvent={this.clickEvent}
          />
          <Footer/>
 
        </div>
      );
    }
  }
  
  export default ClickyGame;