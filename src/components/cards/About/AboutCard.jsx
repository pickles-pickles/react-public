const AboutCard = () => {
  return (
    <div className='card'>
      <div className='card-header site-description'>About Me</div>
      <div
        class='card-body'
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <p>
          I love front-end development because my work is closer to the final
          user. I am Chris Georgakopoulos. I am a front-end- developer that
          works with the React ecosystem tools to build well-crafted web apps.{' '}
        </p>

        <p>
          As a Front-End Developer, my expertise lies in creating visually
          stunning, user-friendly web applications that engage and delight
          users. With a strong command of HTML, CSS, JavaScript, and various
          front-end frameworks and libraries, I have the skills to transform
          complex concepts and designs into seamless, responsive web
          experiences.
        </p>
        <p>
          {' '}
          I am passionate about staying up-to-date with the latest industry
          trends and technologies, and am committed to delivering exceptional
          results through collaborative teamwork, attention to detail, and a
          keen eye for design. Whether it's developing intuitive user
          interfaces, implementing efficient front-end architecture, or
          optimizing website performance, I thrive on the challenge of creating
          dynamic, interactive web experiences that enhance the user experience
          and drive engagement. With experience working remotely for a large
          enterprise with a portfolio that includes a little below 100 sites -
          some of them being among the largest wordwide with millions of
          visitors every month - I am comfortable working within a fast-paced,
          highly challenging environment, and pride myself on my ability to
          communicate effectively and adapt to changing priorities. I am excited
          to continue honing my skills and contributing to the creation of
          innovative, impactful web experiences.
        </p>
        <div className='text'>
          You can view or download my CV from &nbsp;
          <a href='https://drive.google.com/file/d/1sUmc_BFLvq_Fn4NnfuJ8OU-oXyqM_cIk/view?usp=sharing'>
            my Google Drive{' '}
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
