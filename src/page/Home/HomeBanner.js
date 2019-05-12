import React from 'react'
import Fade from 'react-reveal/Fade'
import BackgroundOne from '../../images/homepage-bg-1.jpg'
import BackgroundTwo from '../../images/homepage-bg-2.jpg'
import BackgroundFour from '../../images/homepage-bg-4.jpg'
import BackgroundFive from '../../images/homepage-bg-5.jpg'
import HomeSlider from './HomeSlider'

const sectionStyle1 = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${BackgroundOne})`
}
const sectionStyle2 = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${BackgroundTwo})`
}
const sectionStyle4 = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${BackgroundFour})`
}
const sectionStyle5 = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${BackgroundFive})`
}

const HomeBanner = props => {
  return (
    <div>
      <div className="section" style={sectionStyle1}>
        <Fade>
          <HomeSlider />
        </Fade>
      </div>

      <div className="section" style={sectionStyle2}>
        <Fade>
          <div className="section-content">
            <h1 className="sub">
              Web <div>Development</div>
            </h1>
            <div className="section-content-inner">
              <p>
                A website is the frontline for first impressions and design and
                function go hand in hand to motivate our clients’ target
                audience to take action.
              </p>
              <p>
                At Big Bang Design, we go beyond the aesthetics to create a
                digital experience that enthralls your stakeholders beyond the
                surface.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="section" style={sectionStyle4}>
        <Fade>
          <div className="section-content">
            <h1 className="sub">
              Copy <div>Writing</div>
            </h1>
            <div className="section-content-inner copy-write">
              <p>
                Your website only has a few seconds to make a great first
                impression and gain recognition and trust.
              </p>
              <p>
                So we make sure your message is clear. Consumers will always go
                where the conversation speaks their language.
              </p>
              <p>
                Copywriting is the art and science of strategically delivering
                words (whether written or spoken) that get people to take some
                form of action.
              </p>
              <p>
                Content also plays a role in Search Engine Optimisation (SEO),
                where quality content boosts your website’s relevance and search
                rankings.
              </p>
              <p>
                As more and more companies migrate to the digital world and the
                development of an online presence, having a website also creates
                an immediate and pressing need for quality content that appeal
                to your target audience.{' '}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="section" style={sectionStyle5}>
        <Fade>
          <div className="section-content">
            <h1 className="sub">
              Multimedia <div>Design</div>
            </h1>
            <div className="section-content-inner multimedia-design">
              <p>
                Multimedia design is the art of integrating multiple forms of
                media.
              </p>
              <p>
                Digital design permeates many aspects of our everyday lives and
                it has become an increasingly important area.
              </p>
              <p>
                Different businesses have different needs, and to fully capture
                what you require, you will find our extensive range of
                capabilities adequate to engage your customers and make them
                remember your services and products.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Fade>
        <div className="footer">
          © 2019 BigBang Design. All rights reserved.
        </div>
      </Fade>
    </div>
  )
}

export default HomeBanner
