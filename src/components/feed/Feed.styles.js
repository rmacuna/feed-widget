import styled from "styled-components";

export const FeedContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FeedBackground = styled.aside`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  right: 0;
  height: 700px;
  background: linear-gradient(90deg, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
  clip-path: polygon(0 64%, 100% 20%, 100% 100%, 0% 100%);
`;

export const FeedScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 1200px;
`;

export const FeedSkeleton = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  border-radius: ${(props) => props.borderRadius};
  animation: pulse 1.2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

export const FeedErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const FeedTitle = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  max-width: 350px;
  text-align: center;
`;

export const FeedGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  grid-gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(300px, 1fr));
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }
`;
