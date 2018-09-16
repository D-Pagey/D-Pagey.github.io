import React from 'react';

import { ProjectsWrapper, ProjectsSubtitle, ImageThumbnail } from './styles';
import twitch from '../../imgs/twitch.png';
import wikipedia from '../../imgs/wikipedia.png';
import calculator from '../../imgs/calculator.png';
import tictactoe from '../../imgs/tictactoe.png';
import pomodoro from '../../imgs/pomodoro.png';
import quoter from '../../imgs/quoter.png';


function Projects() {
  return (
    <ProjectsWrapper>
      <ProjectsSubtitle>Projects</ProjectsSubtitle>
      <a
        href="https://github.com/d-pagey/calculator"
        target="_blank"
        rel="noopener noreferrer"
      ><ImageThumbnail
        src={calculator}
        alt="Calculator Thumbnail"
      />
      </a>

      <a
        href="https://github.com/d-pagey/tictactoe"
        target="_blank"
        rel="noopener noreferrer"
      ><ImageThumbnail
        src={tictactoe}
        alt="TicTacToe Thumbnail"
      />
      </a>

      <a
        href="https://github.com/d-pagey/wikipedia"
        target="_blank"
        rel="noopener noreferrer"
      ><ImageThumbnail
        src={wikipedia}
        alt="Wikipedia Thumbnail"
      />
      </a>

      <a
        href="https://github.com/d-pagey/twitchtv"
        target="_blank"
        rel="noopener noreferrer"
      ><ImageThumbnail
        src={twitch}
        alt="TwitchTV Thumbnail"
      />
      </a>

      <a
        href="https://github.com/d-pagey/pomodoro"
        target="_blank"
        rel="noopener noreferrer"
      ><ImageThumbnail
        src={pomodoro}
        alt="Pomodoro Thumbnail"
      />
      </a>

      <a
        href="https://github.com/d-pagey/quoter"
        target="_blank"
        rel="noopener noreferrer"
      ><ImageThumbnail
        src={quoter}
        alt="Quoter Thumbnail"
      />
      </a>
    </ProjectsWrapper>
  );
}

export default Projects;
