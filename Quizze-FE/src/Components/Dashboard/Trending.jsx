import QuizCard from "../QuizCard/QuizCard";


export default function ()  {
  return (
    <div className='trending'>
        <h1 className='trendingtitle'>Trending Quizs</h1>
        <div className='trendingquizs'>
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
            <QuizCard />
        </div>
    </div>
  )
}
