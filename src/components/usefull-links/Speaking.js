import React from "react";
import { Link } from "react-router-dom";
const Speaking = () => {
  const frk = [
    "Break Through the Glass Ceiling: Communication Strategies for Women in the Workplace",
    "Managing Up: Creating an Effective Relationship with Your Boss",
    "Mastering Mindfulness at Work: Creating Calm in Chaos",
    "Raise Your Emotional IQ Instantly and Gain Career Success",
    "Retire Early, Young and Happy: 7 Steps to Creating the Ideal Retirement Career",
    "Use the Secret Laws of Attraction to Get the Career and Life You Want",
    "The Secret to Getting into Good Habits",
    "Procrastination: Why we Do It and How to Stop",
    "Be Simply Irresistible: Attract the Love You Want",
    "Be Financially Free, Retire Early",
  ];
  return (
    <>
      <section className="w-full bg-returnPolicy h-96 bg-no-repeat bg-cover">
        <h2 className="text-center text-6xl text-white font-semibold pt-28">
          Increase your speaking skills
        </h2>
      </section>
      <div>
        <section className="px-[200px] py-16 bg-gray-200">
          <div className="relative">
            <blockquote className="pl-5">
              <p>
                "My mission has been to make top quality life coaching
                affordable and available to anyone who wants to live their ideal
                life. LifeCoach gives 10% of its profit to charity to help make
                the world a better place. Come join us now and start living your
                ideal life today. I’m looking forward to coaching with you to
                create the life you’ve always wanted!"
              </p>
              <footer>— Talane Miedaner</footer>
            </blockquote>
            <span className="absolute top-[6px] bottom-[6px] left-0 h-[full] w-[8px] bg-blue-300 m-0 p-0"></span>
          </div>
          <div className="relative">
            <p className="mt-5 text-lg pl-5">
              Talane Miedaner, owner and founder of LifeCoach and author of the
              <span className="font-bold text-xl ml-1">
                internationally best-selling book Coach Yourself to Success:
              </span>
              101 Tips to Accomplish your Personal and Professional Goals, The
              Secret Laws of Attraction, and Coach Yourself to a New Career (All
              McGraw-Hill). She has gained international prominence as a
              professional life coach by guiding thousands of people to create
              their ideal life and find wealth, success, and happiness. As a
              leader in the cutting-edge field of personal coaching, Talane
              helps people restructure their lives to easily attract the
              opportunities they want.
            </p>
            <span className="absolute top-[6px] bottom-[6px] left-0 h-[full] w-[8px] bg-blue-300 m-0 p-0"></span>
          </div>
          <div className="relative">
            <p className="mt-5 text-lg pl-5">
              Her company works with executives, public officials,
              entrepreneurs, and business owners around the world in person, by
              phone, and online. Talane leads numerous seminars nationally and
              internationally, and has taught at CoachU where she received
              training as a professional life coach. Talane is an adjunct
              professor for Georgetown University’s Institute for
              Transformational Leadership and Coaching where she leads courses
              on Authentic Leadership. She holds a degree in International
              Affairs from the School of Foreign Service and a master’s in
              English from Georgetown University. Prior to becoming a life
              coach, Talane held a corporate position as second vice president
              at Chase Bank in New York City.
            </p>
            <span className="absolute top-[6px] bottom-[6px] left-0 h-[full] w-[8px] bg-blue-300 m-0 p-0"></span>
          </div>

          <p className="mt-5 text-lg">
            For one-to-one private life coaching with Talane contact{" "}
            <Link className="text-blue-600" to="">
              coaching@lifecoach.com
            </Link>
            .
          </p>

          <div className="relative">
            <p className="mt-5 text-lg pl-5">
              In the Online Life Coaching Course, you will receive proven
              methodology for achieving success and attracting everything you
              have always wanted. Using the practical wisdom drawn from her
              experience as a professional life coach for hundreds of Fortune
              500 clients and her own corporate background, Talane shares
              hundreds of the most powerful and effective coaching tips and
              presents them in an easy-to-follow, life-changing coaching course
              —
              <span className="font-bold">
                Coach Yourself to Success Online.
              </span>
            </p>
            <span className="absolute top-[6px] bottom-[6px] left-0 h-[full] w-[8px] bg-blue-300 m-0 p-0"></span>
          </div>
        </section>
        <section className="px-[200px] py-16 bg-gray-100">
          <h2 className="text-3xl text-center font-semibold mb-5">
            Speaking & Events
          </h2>
          <p className="text-lg">
            Talane is a sought after international speaker and coach. She covers
            a broad range of topics and can customize a keynote, seminar or
            workshop to meet the needs of any group — from corporations to
            professional organizations and associations.
          </p>
          <h3 className="text-2xl mt-6 mb-4">
            Frequently Requested Keynotes & Seminars
          </h3>
          <ul className="list-disc pl-5">
            {frk.map((info, i) => (
              <li className="mt-3 text-lg" key={i}>
                {info}
              </li>
            ))}
          </ul>

          <div className="relative my-5">
            <blockquote className="pl-5">
              <p>
                "Part consultant, part motivational speaker, part therapist and
                part rent-a-friend, coaches work with managers, entrepreneurs,
                and just plain folks, helping them define and achieve their
                goals — career, personal, or most often both."
              </p>
              <footer>– Newsweek</footer>
            </blockquote>
            <span className="absolute top-[6px] bottom-[6px] left-0 h-[full] w-[8px] bg-blue-300 m-0 p-0"></span>
          </div>
          <p>
            If you are interested in booking a speaking engagement, workshop,
            webinar or live seminar or if you have questions about Talane’s
            services contact:{" "}
            <Link className="text-blue-600" to="">
              admin@lifecoach.com
            </Link>
          </p>
        </section>
      </div>
    </>
  );
};

export default Speaking;
