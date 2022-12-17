import React from 'react'
import Container from './../Container';

function About2() {
    return (
    <section className="flex py-10">
    <Container className="w-full">
      <div className="grid items-center grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-6">
          <div className="grid grid-cols-12 gap-5 md:gap-x-5">
            <div className="col-span-12 bg-gray-200 h-52">
              <figure className="rounded"><img src="./assets/img/photos/g8.jpg" alt="" /></figure>
            </div>
            <div className="col-span-6 mt-6 bg-gray-200 h-52">
              <figure className="rounded"><img src="./assets/img/photos/g9.jpg" alt="" /></figure>
            </div>
            <div className="col-span-6 mb-6 bg-gray-200 h-52">
              <figure className="rounded"><img src="./assets/img/photos/g10.jpg"  alt="" /></figure>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <h2 className="mb-3 text-xl font-bold text-gray-300 uppercase ">What Makes Us Different?</h2>
          <h3 className="mb-6 text-lg font-semibold text-gray-500">We bring <span className="">solutions</span> to make life easier for our customers.</h3>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 p-5 border md:col-span-6">
              <div className="flex flex-row">
                <div>
                  <img src="./assets/img/icons/solid/lamp.svg" className="svg-inject icon-svg icon-svg-xs solid-mono text-fuchsia me-4" alt="" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">Creativity</h4>
                  <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 p-5 border md:col-span-6">
              <div className="flex flex-row">
                <div>
                  <img src="./assets/img/icons/solid/bulb.svg" className="svg-inject icon-svg icon-svg-xs solid-mono text-violet me-4" alt="" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">Innovative Thinking</h4>
                  <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 p-5 border md:col-span-6">
              <div className="flex flex-row">
                <div>
                  <img src="./assets/img/icons/solid/puzzle.svg" className="svg-inject icon-svg icon-svg-xs solid-mono text-orange me-4" alt="" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold ">Rapid Solutions</h4>
                  <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
                </div>
              </div>
            </div>
            <div className="col-span-12 p-5 border md:col-span-6">
              <div className="flex flex-row">
                <div>
                  <img src="./assets/img/icons/solid/headphone.svg" className="svg-inject icon-svg icon-svg-xs solid-mono text-green me-4" alt="" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-bold">Top-Notch Support</h4>
                  <p className="mb-0">Curabitur blandit lacus porttitor ridiculus mus.</p>
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

export default About2