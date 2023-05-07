import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from './Menu'
const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>pritom</span>
            <p>posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
          <Link to={`/write?delete=2`}>
            <img src={Delete} alt=""/>
          </Link>
            
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nam, maxime ipsum cumque voluptas amet odit ullam atque eaque fuga.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at molestiae accusantium! Nam quisquam, vitae numquam perferendis possimus quaerat unde hic odit ex expedita nisi consequatur nihil nemo. Minima deserunt ipsa dolorem neque velit eos! Facere, iste rerum! Ut placeat vitae officiis modi harum illo reprehenderit, incidunt doloremque sunt. Suscipit voluptatem  <br /> illum dolores accusamus atque inventore? Non, earum maiores beatae quos ad obcaecati consectetur molestias necessitatibus dolor. Aperiam aliquam sunt cum corporis nihil qui exercitationem dolor saepe tempore at quisquam iusto maiores hic consequuntur totam quod illum similique, aspernatur repellat dolores nostrum consequatur. Nisi laudantium at accusantium rem molestiae repellat maiores inventore voluptates magnam ratione repellendus, ab consequuntur! Autem quam pariatur ipsam, laboriosam, illum sint amet voluptates eligendi maxime voluptatem <br /> dolores nulla. Ipsum explicabo sequi quibusdam ab necessitatibus tenetur inventore quasi id ad, soluta eum ducimus provident autem porro eaque. Error saepe incidunt, qui fugiat praesentium tempore unde accusantium exercitationem facilis ipsum minima numquam illum iusto eius provident voluptate sunt itaque maiores dignissimos ex dolore deserunt? Mollitia blanditiis consequatur saepe doloremque beatae odit suscipit maxime nam cumque, accusamus deserunt fuga possimus iure praesentium ea, nesciunt iusto exercitationem quam rem. Illum nobis at perferendis consequatur autem omnis exercitationem quo amet non?</p>
      </div>
     <Menu/>
    </div>
  )
}

export default Single