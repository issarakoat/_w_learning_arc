/*  /components/layouts/article-right-rail.jsx  */

import React from 'react'

const BootstrapLayout = (props) => {
  return (
    <div className='row'>
      <header className='col-12 fixed-on-small'>
        {props.children[0]}
      </header>
      <section className='col-12'>
        <div className='row'>
          <article className='col-xs-12 col-md-6'>
            {props.children[1]}
          </article>
          <aside className='col-xs-12 col-md-6'>
            {props.children[2]}
          </aside>
        </div>
      </section>
      <div className='row'>
        <div className='col-4'>{props.children[3]}</div>
        <div className='col-4'>{props.children[4]}</div>
        <div className='col-4'>{props.children[5]}</div>

      </div>
      <footer className='col-12'>
        {props.children[6]}
        <p>Copyright &copy; 2018</p>
      </footer>
    </div>
  )
}

BootstrapLayout.sections = ['header', 'leftBody', 'rightBody', 'bottomLeft', 'bottomMid', 'bottomRight', 'footer']

export default BootstrapLayout