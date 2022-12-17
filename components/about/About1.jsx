import React from 'react'
import Container from './../Container';

function About1() {
  return (
<section className="flex items-center justify-center py-10">
  <Container className="py-14">
    <div className="grid items-center grid-cols-12 gap-10">
      <div className="relative col-span-12 lg:col-span-5">
        <div className="absolute w-40 h-40 bg-green-200 rounded-full -z-10 -top-8 -right-9"></div>
        <figure className="h-[25rem] rounded bg-slate-300"><img src="" alt="img" /></figure>
      </div>
     
      <div className="col-span-12 lg:col-span-7">
        <h2 className="mb-3 text-2xl">Who Are We?</h2>
        <p className="pb-4 text-xl leading-[1.6]">We are a digital and branding company that believes in the power of creative strategy and along with great design.</p>
        <p className="mb-6 text-lg">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 p-4 border md:col-span-1">
            <div className="flex-row d-flex">
              <div>
                <img src="./assets/img/icons/lineal/target.svg" className="svg-inject icon-svg icon-svg-sm me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Our Mission</h4>
                <p className="mb-0">Dapibus eu leo quam ornare curabitur blandit tempus.</p>
              </div>
            </div>
          </div>
        
          <div className="col-span-2 p-4 border md:col-span-1">
            <div className="flex-row d-flex">
              <div>
                <img src="./assets/img/icons/lineal/award-2.svg" className="svg-inject icon-svg icon-svg-sm me-4" alt="" />
              </div>
              <div>
                <h4 className="mb-1">Our Values</h4>
                <p className="mb-0">Aenean lacinia bibendum nulla sed consectetur.</p>
              </div>
            </div>
          </div>
    
        </div>
  
      </div>
    </div>
  </Container>
</section>
  )
}

export default About1