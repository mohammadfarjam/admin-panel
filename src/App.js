import React, {Component} from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import user from '../src/image/avatar.png'
import './App.css';


class App extends Component {
    state = {
        activeMenu: false,
        MenuBar: false
    };

    MenuBar = (value) => {
        this.setState({
            MenuBar: value
        })
    };


    activeMenu = (value) => {
        this.setState({
            activeMenu: value
        })
    };


    render() {
        return (
            <div className="App">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='header'>
                            <div className='d-flex justify-content-end'>
                                <nav className="col-lg-10 d-flex justify-content-between navbar navbar-light">
                                    <div className='menubar' onClick={() => {
                                        this.MenuBar(this.state.MenuBar ? false : true)
                                    }}>
                                        <i className="fa fa-bars menubarInto fw_color" style={{fontSize: "13pt"}}/>
                                    </div>


                                    <input className="form-control col-2 ml-5 " type="search" placeholder="جستجو"
                                           aria-label="Search"/>
                                </nav>
                            </div>
                            {/*d-flex justify-content-end*/}


                            <div className='col-lg-2 pl-0 mt-3'>
                                <div className='d-flex'>
                                    <img src={user} className='img_user m-2'/>
                                    <div>
                                        <h5 className='mt-4 pr-2 fw_color'>محمد فرجام</h5>
                                        <p className='mt-2 pr-2 fw_color'>مدیر</p>
                                    </div>
                                </div>
                                {/*d-flex*/}
                            </div>
                            {/*col-lg-2*/}
                        </div>
                        {/*header*/}
                    </div>
                    {/*row*/}


                    <div className='row'>
                        <div className={this.state.MenuBar ? 'col-lg-1' : 'col-lg-2 col-md-2 col-sm-2 p-0'}>
                            <div className='wrapper p-3'>
                                <nav id='sidebar' className='w-100'>
                                    {/*sidebar-header*/}
                                    <ul className='lisst-unstyled components'>
                                        <li className={this.state.activeMenu === 'Dashboard' ? 'activeMenu li_parent' : 'li_parent'} onClick={this.activeMenu.bind(this, 'Dashboard')}>
                                            <a href='#' className='d-inline-flex w-100 pr-5' style={{outline: "none"}}>داشبورد
                                                <i className="fa fa-dashboard fr_color ml-3 fs_icon ir_position mr-2"></i>
                                            </a>
                                        </li>
                                        <li className='li_parent'>
                                            <a onClick={this.activeMenu.bind(this, 'posts')} href='#homesubmenu'
                                               data-toggle='collapse' aria-expanded='false'
                                               className={this.state.activeMenu === 'posts' ? 'activeMenu d-inline-flex w-100 pr-5' : 'd-inline-flex w-100 pr-5'}
                                               style={{outline: "none"}}>مطالب
                                                <i className="fa fa-copy fr_color fs_icon ir_position mr-2"/>

                                                <i className="fa fa-chevron-down fb_color i_position"
                                                   style={{fontSize: "8pt"}}/>
                                            </a>

                                            <ul className={this.state.activeMenu === 'posts' ? 'collapse list-unstyled ul_child show' : 'collapse list-unstyled ul_child'}
                                                id='homesubmenu'>
                                                <li className='li_child'>
                                                    <a className='mr-5'>کل مطالب</a>
                                                </li>
                                                <li className='li_child'>
                                                    <a className='mr-5'>ایجاد مطلب</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className=' li_parent'>
                                            <a onClick={this.activeMenu.bind(this, 'Menu')} href='#menu'
                                               data-toggle='collapse' aria-expanded='false'
                                               className={this.state.activeMenu === 'Menu' ? 'activeMenu d-inline-flex w-100 pr-5' : 'd-inline-flex w-100 pr-5'}
                                               style={{outline: "none"}}>منو
                                                <i className="fa fa-ellipsis-v fr_color pl-2 mr-3 fs_icon ir_position"/>
                                                <i className="fa fa-chevron-down fb_color i_position"
                                                   style={{fontSize: "8pt"}}/>
                                            </a>

                                            <ul className={this.state.activeMenu === 'Menu' ? 'collapse list-unstyled ul_child show' : 'collapse list-unstyled ul_child'}
                                                id='menu'>
                                                <li className='li_child'>
                                                    <a className='mr-5'> منوی اصلی</a>
                                                </li>
                                                <li className='li_child'>
                                                    <a className='mr-5'>منوی جانبی</a>
                                                </li>
                                            </ul>
                                        </li>


                                        <li className='li_parent' onClick={this.activeMenu.bind(this, 4)}>
                                            <a className='d-inline-flex w-100 pr-5' style={{outline: "none"}}>خروج
                                                <i className="fa fa-power-off fr_color mr-2 fs_icon fs_icon ir_position"/></a>
                                        </li>
                                    </ul>
                                </nav>
                                {/*sidebar*/}
                            </div>
                            {/*wrapper*/}
                        </div>

                        <div className='col-lg-10' style={{border: "1px solid #e74c3c"}}></div>

                    </div>
                </div>
                {/*container*/}

            </div>
            // App
        );
    }

}

export default App;
