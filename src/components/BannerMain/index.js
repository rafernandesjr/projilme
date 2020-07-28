import React from 'react';
//import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer /*, WatchButton*/ } from './styles';
import Back_Home from '../../assets/img/back_home.jpg';


//function getYouTubeId(youtubeURL) {
//  return youtubeURL
//    .replace(
//      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//      '$7',
//    );
//}

export default function BannerMain({
  title,
  description,
}) {
  //const youTubeID = getYouTubeId(url);
  const bgUrl = Back_Home;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          
          <ContentAreaContainer.Title>
            {title}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {description}
          </ContentAreaContainer.Description>
        
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
