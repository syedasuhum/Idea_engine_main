import React from 'react'
import './GlobalSec.css'

const GlobalSec = () => {
  return (
    <>
      <section className='stats-section' style={{backgroundColor: '#000000'}}>
        <div className='left-side'>
          <h3>globally serving and building in public</h3>
        </div>
        <div className='stats-data-grid'>

          <div class="item">
            <div class="logo">
              <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fusers.d37bf9b8.png&w=64&q=75" alt="" style={{ color: 'transparent' }} />
            </div>
            <div class="count">3896</div>
            <div class="label">Users</div>
          </div>

          <div class="item">
            <div class="logo">
              <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fusers.d37bf9b8.png&w=64&q=75" alt="" style={{ color: 'transparent' }} />
            </div>
            <div class="count">5800 </div>
            <div class="label">Blueprints</div>
          </div>

          <div class="item">
            <div class="logo">
              <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fupgrade.fe85e326.png&w=64&q=75" alt="" style={{ color: 'transparent' }} />
            </div>
            <div class="count">158 </div>
            <div class="label">Upgrades</div>
          </div>

          <div class="item">
            <div class="logo">
              <img src="https://beta.dayzero.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap.7f09a278.png&w=64&q=75" alt="" />
            </div>
            <div class="count">24 </div>
            <div class="label">Countries</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default GlobalSec;