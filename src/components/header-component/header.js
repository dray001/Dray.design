import { Link } from "gatsby"
import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import "./header.scss"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import pdf from '../doc/Oni_Oludare_CV.pdf'

const linkedInLink = "https://www.linkedin.com/in/goddray/";
const twitterLink = "https://twitter.com/orishadray";
const emailLink = "mailto:dareony@gmail.com";


const Header = ({siteTitle}) => {

   const [openState, setOpenstate] = useState(false);

   useEffect(()=> {
      setOpenstate(false);
   },[])

   const toggleMenu =()=> {
     setOpenstate(!openState);
     let cw = document.querySelector('.childrenWrapper');

     if(openState === false) {
       cw.classList.add('modalOn');
     }

     else {
      cw.classList.remove('modalOn');
     }
   }

   const closeMenu =()=> {
    setOpenstate(false);
   }
   
  return (
    <header>
      <div onClick={toggleMenu} className={openState ? 'hambugerModal' : 'hambugerModal off' }></div>

      <div className="headerContainer">

        <Link onClick={closeMenu} to = '/'>
          <svg className="logo" width="83" height="18" viewBox="0 0 83 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.23047 1.35938C6.27604 1.35938 7.2321 1.53841 8.09863 1.89648C8.97233 2.2474 9.72786 2.75228 10.3652 3.41113C11.0026 4.06999 11.4932 4.85775 11.8369 5.77441C12.1878 6.68392 12.3633 7.69727 12.3633 8.81445V9.55566C12.3633 10.6657 12.1878 11.679 11.8369 12.5957C11.4932 13.5124 11.0026 14.3001 10.3652 14.959C9.73503 15.6107 8.97949 16.1156 8.09863 16.4736C7.22494 16.8245 6.25814 17 5.19824 17H0.396484V1.35938H5.23047ZM7.33594 13.917C6.75586 14.2965 6.04329 14.4863 5.19824 14.4863H3.61914V3.88379H5.23047C5.85352 3.88379 6.40495 3.99121 6.88477 4.20605C7.36458 4.41374 7.76921 4.72526 8.09863 5.14062C8.42806 5.55599 8.67513 6.06803 8.83984 6.67676C9.01172 7.28548 9.09766 7.99089 9.09766 8.79297V9.55566C9.09766 10.6012 8.94727 11.4928 8.64648 12.2305C8.35286 12.9681 7.91602 13.5303 7.33594 13.917Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6025 8.24512C20.7243 8.51009 20.7852 8.82878 20.7852 9.20117V9.9209H19.3994C18.5114 9.9209 17.7308 10.0068 17.0576 10.1787C16.3844 10.3434 15.8223 10.5905 15.3711 10.9199C14.9271 11.2422 14.5905 11.6396 14.3613 12.1123C14.1322 12.585 14.0176 13.1257 14.0176 13.7344C14.0176 14.4076 14.1895 15.0091 14.5332 15.5391C14.8841 16.0618 15.3568 16.4736 15.9512 16.7744C16.5527 17.068 17.2223 17.2148 17.96 17.2148C18.54 17.2148 19.0413 17.1289 19.4639 16.957C19.8864 16.778 20.248 16.5524 20.5488 16.2803C20.6786 16.1597 20.7984 16.0359 20.9082 15.9087C20.9863 16.3414 21.0956 16.7052 21.2363 17H24.3623V16.8174C24.2119 16.5166 24.0973 16.1657 24.0186 15.7646C23.9398 15.3564 23.9004 14.8337 23.9004 14.1963V9.22266C23.9004 8.32031 23.6963 7.56836 23.2881 6.9668C22.887 6.36523 22.3356 5.91406 21.6338 5.61328C20.932 5.3125 20.1299 5.16211 19.2275 5.16211C18.4756 5.16211 17.7952 5.25879 17.1865 5.45215C16.585 5.64551 16.0658 5.91406 15.6289 6.25781C15.1921 6.5944 14.859 6.9847 14.6299 7.42871C14.4007 7.87272 14.2861 8.3418 14.2861 8.83594H17.3799C17.3799 8.54232 17.4479 8.28809 17.584 8.07324C17.7201 7.85124 17.9134 7.68294 18.1641 7.56836C18.4147 7.44661 18.7119 7.38574 19.0557 7.38574C19.4567 7.38574 19.7826 7.46094 20.0332 7.61133C20.291 7.76172 20.4808 7.97298 20.6025 8.24512ZM20.7852 13.7149V11.6719H19.4854C19.0771 11.6719 18.7227 11.7184 18.4219 11.8115C18.1211 11.9046 17.874 12.0371 17.6807 12.209C17.4873 12.3737 17.3441 12.5671 17.251 12.7891C17.165 13.0111 17.1221 13.2546 17.1221 13.5195C17.1221 13.7845 17.1829 14.0244 17.3047 14.2393C17.4264 14.4469 17.6019 14.6117 17.8311 14.7334C18.0602 14.848 18.3288 14.9053 18.6367 14.9053C19.1022 14.9053 19.5068 14.8122 19.8506 14.626C20.1943 14.4398 20.4593 14.2106 20.6455 13.9385C20.6992 13.8628 20.7458 13.7883 20.7852 13.7149Z" fill="black"/>
            <path d="M29.2989 6.80116L29.1963 5.37695H26.2852V17H29.3789V9.3336C29.4803 9.10661 29.6128 8.90849 29.7764 8.73926C29.9912 8.52441 30.2562 8.36328 30.5713 8.25586C30.8936 8.14128 31.2731 8.08398 31.71 8.08398C31.8818 8.08398 32.0716 8.09473 32.2793 8.11621C32.4941 8.13053 32.6768 8.14844 32.8271 8.16992L32.8809 5.30176C32.7663 5.25879 32.6195 5.22656 32.4404 5.20508C32.2614 5.17643 32.0859 5.16211 31.9141 5.16211C31.3698 5.16211 30.8864 5.29102 30.4639 5.54883C30.0413 5.80664 29.6833 6.17188 29.3896 6.64453C29.3586 6.69577 29.3283 6.74798 29.2989 6.80116Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0488 16.7852C37.765 17.0716 38.5742 17.2148 39.4766 17.2148C40.2285 17.2148 40.8981 17.1146 41.4854 16.9141C42.0726 16.7064 42.5739 16.4414 42.9893 16.1191C43.4118 15.7969 43.7448 15.4603 43.9883 15.1094L42.4844 13.4766C42.1335 13.9206 41.7145 14.2536 41.2275 14.4756C40.7477 14.6904 40.2285 14.7979 39.6699 14.7979C39.2188 14.7979 38.8141 14.7191 38.4561 14.5615C38.1051 14.404 37.8044 14.182 37.5537 13.8955C37.3102 13.609 37.1204 13.2689 36.9844 12.875C36.9087 12.6438 36.8553 12.4004 36.824 12.1445H44.2461V10.8555C44.2461 10.0033 44.1351 9.22982 43.9131 8.53516C43.6911 7.83333 43.3617 7.23177 42.9248 6.73047C42.4951 6.22917 41.9616 5.84245 41.3242 5.57031C40.6868 5.29818 39.9564 5.16211 39.1328 5.16211C38.2878 5.16211 37.5286 5.30892 36.8555 5.60254C36.1823 5.889 35.6094 6.30078 35.1367 6.83789C34.6712 7.375 34.3132 8.00879 34.0625 8.73926C33.8118 9.46973 33.6865 10.2754 33.6865 11.1562V11.5859C33.6865 12.3594 33.819 13.0898 34.084 13.7773C34.349 14.4577 34.7285 15.0557 35.2227 15.5713C35.724 16.0869 36.3327 16.4915 37.0488 16.7852ZM36.8616 10.082C36.8782 9.96455 36.8976 9.84996 36.9199 9.73828C37.013 9.30143 37.1491 8.92188 37.3281 8.59961C37.5143 8.27734 37.7542 8.02669 38.0479 7.84766C38.3415 7.66862 38.6924 7.5791 39.1006 7.5791C39.5804 7.5791 39.9743 7.67936 40.2822 7.87988C40.5902 8.0804 40.8193 8.35254 40.9697 8.69629C41.1273 9.03288 41.2061 9.41602 41.2061 9.8457V10.082H36.8616Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M64.0439 12.7568C64.3662 11.8115 64.5273 10.7445 64.5273 9.55566V8.81445C64.5273 7.61849 64.3626 6.55143 64.0332 5.61328C63.7109 4.66797 63.2526 3.8623 62.6582 3.19629C62.071 2.53027 61.3691 2.02181 60.5527 1.6709C59.7435 1.31999 58.8447 1.14453 57.8564 1.14453C56.8753 1.14453 55.9766 1.31999 55.1602 1.6709C54.3509 2.02181 53.6491 2.53027 53.0547 3.19629C52.4674 3.8623 52.0127 4.66797 51.6904 5.61328C51.3682 6.55143 51.207 7.61849 51.207 8.81445V9.55566C51.207 10.7445 51.3682 11.8115 51.6904 12.7568C52.0199 13.7021 52.4818 14.5078 53.0762 15.1738C53.6706 15.8327 54.3724 16.3376 55.1816 16.6885C55.998 17.0394 56.8968 17.2148 57.8779 17.2148C58.8662 17.2148 59.765 17.0394 60.5742 16.6885C61.3906 16.3376 62.0924 15.8327 62.6797 15.1738C63.2669 14.5078 63.7217 13.7021 64.0439 12.7568ZM61.0469 6.60156C61.1973 7.23177 61.2725 7.96224 61.2725 8.79297V9.55566C61.2725 10.3792 61.1973 11.1097 61.0469 11.7471C60.8965 12.3773 60.6781 12.9108 60.3916 13.3477C60.1051 13.7773 59.7507 14.1032 59.3281 14.3252C58.9056 14.5472 58.4222 14.6582 57.8779 14.6582C57.3337 14.6582 56.8503 14.5472 56.4277 14.3252C56.0052 14.1032 55.6471 13.7773 55.3535 13.3477C55.0599 12.9108 54.8379 12.3773 54.6875 11.7471C54.5371 11.1097 54.4619 10.3792 54.4619 9.55566V8.79297C54.4619 7.96224 54.5371 7.23177 54.6875 6.60156C54.8379 5.97135 55.0563 5.44141 55.3428 5.01172C55.6364 4.58203 55.9909 4.25977 56.4062 4.04492C56.8288 3.82292 57.3122 3.71191 57.8564 3.71191C58.4007 3.71191 58.8841 3.82292 59.3066 4.04492C59.7292 4.25977 60.0872 4.58203 60.3809 5.01172C60.6745 5.44141 60.8965 5.97135 61.0469 6.60156Z" fill="black"/>
            <path d="M69.5985 6.76655L69.4902 5.37695H66.5898V17H69.6836V8.75482C69.7271 8.67472 69.7736 8.59792 69.8232 8.52441C70.0238 8.23079 70.2744 8.00163 70.5752 7.83691C70.8831 7.6722 71.2448 7.58984 71.6602 7.58984C72.0612 7.58984 72.3978 7.65072 72.6699 7.77246C72.9492 7.88704 73.1605 8.08756 73.3037 8.37402C73.4469 8.66048 73.5186 9.06152 73.5186 9.57715V17H76.6338V9.58789C76.6338 8.77148 76.5443 8.0804 76.3652 7.51465C76.1934 6.94889 75.9427 6.49414 75.6133 6.15039C75.291 5.80664 74.9043 5.55599 74.4531 5.39844C74.002 5.24089 73.5042 5.16211 72.96 5.16211C72.2725 5.16211 71.6494 5.2946 71.0908 5.55957C70.5394 5.81738 70.0631 6.19336 69.6621 6.6875C69.6407 6.71355 69.6195 6.7399 69.5985 6.76655Z" fill="black"/>
            <path d="M79.4268 1.23047C79.1117 1.52409 78.9541 1.89648 78.9541 2.34766C78.9541 2.79883 79.1117 3.17122 79.4268 3.46484C79.7419 3.75846 80.1644 3.90527 80.6943 3.90527C81.2171 3.90527 81.6361 3.75846 81.9512 3.46484C82.2734 3.17122 82.4346 2.79883 82.4346 2.34766C82.4346 1.89648 82.2734 1.52409 81.9512 1.23047C81.6361 0.936849 81.2171 0.790039 80.6943 0.790039C80.1644 0.790039 79.7419 0.936849 79.4268 1.23047Z" fill="black"/>
            <path d="M82.252 17V5.37695H79.1475V17H82.252Z" fill="black"/>
          </svg>
        </Link>

        <div className="desktopNav">
          <Link to ='/#projectFolder' > Work & Articles </Link>
          <Link to = '/#Skillset' > Skillset </Link>
          <Link to = '/#AboutMe' > About Me </Link>
          <a target='_blank' href={pdf}> Resume </a>
        </div>

        <div className={openState ? 'navHolder' : 'navHolder off' }>

          <div className="navHolderWrapper">
              <div className="headerLink">
                <Link onClick={toggleMenu} to ='/#projectFolder' > Work & Articles </Link>
                <Link onClick={toggleMenu} to = '/#Skillset' > Skillset </Link>
                <Link onClick={toggleMenu} to = '/#AboutMe' > About Me </Link>
                <a target='_blank' href={pdf}> Resume </a>
              </div>

              <div className="contactMeGroupMobile">

                <div className="contactMeMedium">
                  <a target='blank' className="linkedIn" href={linkedInLink}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9412 0.537048C6.31375 0.537048 0.941162 5.90963 0.941162 12.537C0.941162 19.1645 6.31375 24.537 12.9412 24.537C19.5686 24.537 24.9412 19.1645 24.9412 12.537C24.9412 5.90963 19.5686 0.537048 12.9412 0.537048ZM6.70193 10.4759H9.4214V18.6468H6.70193V10.4759ZM9.60053 7.9484C9.58288 7.14725 9.00997 6.53705 8.07966 6.53705C7.14935 6.53705 6.54115 7.14725 6.54115 7.9484C6.54115 8.73295 7.13137 9.36072 8.04436 9.36072H8.06174C9.00997 9.36072 9.60053 8.73295 9.60053 7.9484ZM16.0977 10.2841C17.8873 10.2841 19.2288 11.4522 19.2288 13.9619L19.2287 18.6468H16.5094V14.2754C16.5094 13.1774 16.1159 12.4281 15.1314 12.4281C14.3801 12.4281 13.9326 12.9332 13.736 13.4211C13.6641 13.5959 13.6465 13.8395 13.6465 14.0837V18.647H10.9267C10.9267 18.647 10.9625 11.2429 10.9267 10.4762H13.6465V11.6335C14.0074 11.0771 14.6539 10.2841 16.0977 10.2841Z" fill="black"/>
                    </svg>
                  </a>

                  <a target='blank' className="twitter" href={twitterLink}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9412 0.537048C6.31375 0.537048 0.941162 5.90963 0.941162 12.537C0.941162 19.1645 6.31375 24.537 12.9412 24.537C19.5686 24.537 24.9412 19.1645 24.9412 12.537C24.9412 5.90963 19.5686 0.537048 12.9412 0.537048ZM12.6069 10.706L12.5818 10.2908C12.5062 9.21459 13.1693 8.2316 14.2185 7.85027C14.6047 7.71469 15.2594 7.69774 15.6875 7.81638C15.8553 7.86722 16.1743 8.0367 16.4009 8.18923L16.8122 8.46888L17.2655 8.32482C17.5173 8.24855 17.853 8.12144 18.0041 8.0367C18.1468 7.96044 18.2727 7.91807 18.2727 7.94349C18.2727 8.08755 17.9622 8.57904 17.702 8.85021C17.3494 9.23154 17.4501 9.26544 18.1636 9.01121C18.5917 8.86716 18.6001 8.86716 18.5161 9.02816C18.4658 9.1129 18.2056 9.40949 17.9286 9.68066C17.4585 10.1467 17.4334 10.1976 17.4334 10.5874C17.4334 11.189 17.148 12.4432 16.8626 13.1296C16.3338 14.4176 15.2006 15.7481 14.0675 16.4175C12.4726 17.3581 10.349 17.5954 8.56116 17.0446C7.9652 16.8582 6.94116 16.3836 6.94116 16.2989C6.94116 16.2735 7.25173 16.2396 7.62945 16.2311C8.41846 16.2141 9.20748 15.9938 9.87898 15.604L10.3322 15.3328L9.81183 15.1549C9.07318 14.9007 8.41007 14.316 8.24219 13.7651C8.19183 13.5872 8.20862 13.5787 8.67867 13.5787L9.16551 13.5702L8.75421 13.3753C8.26737 13.1296 7.82251 12.7144 7.60427 12.2907C7.44479 11.9856 7.24334 11.2145 7.30209 11.1551C7.31888 11.1297 7.49515 11.1806 7.6966 11.2484C8.27577 11.4602 8.35131 11.4094 8.01556 11.0535C7.38603 10.4094 7.19297 9.45186 7.49515 8.54514L7.63784 8.13839L8.19183 8.6892C9.32499 9.7993 10.6596 10.4603 12.1873 10.6552L12.6069 10.706Z" fill="black"/>
                    </svg>
                  </a>

                  <a target='blank' className="email" href={emailLink}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9412 24.537C19.5686 24.537 24.9412 19.1645 24.9412 12.537C24.9412 5.90963 19.5686 0.537048 12.9412 0.537048C6.31375 0.537048 0.941162 5.90963 0.941162 12.537C0.941162 19.1645 6.31375 24.537 12.9412 24.537ZM13.1084 11.8636C12.1709 11.8636 7.34116 9.12473 7.34116 9.12473V8.69705C7.34116 8.16713 7.77124 7.73705 8.30212 7.73705H17.9146C18.446 7.73705 18.876 8.16713 18.876 8.69705L18.8684 9.17705C18.8684 9.17705 14.0909 11.8636 13.1084 11.8636ZM18.8684 10.6171C18.8684 10.6171 14.136 13.1836 13.1084 13.1836C12.1709 13.1836 7.34836 10.6171 7.34884 10.6171L7.34116 16.3771C7.34116 16.907 7.77172 17.3371 8.30212 17.3371H17.9146C18.446 17.3371 18.876 16.907 18.876 16.3771L18.8684 10.6171Z" fill="black"/>
                    </svg>
                  </a>
                </div>

              </div>
          </div>
      
        </div>
        
        <div className='iconHolder'>
  
            <span className='darkLightSwitcher'>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <label  className='switch'>
                      <input
                        type="checkbox"
                        onChange={e => {
                          toggleTheme(e.target.checked ? 'dark' : 'light')
                        }}
                        checked={theme === 'dark'}
                      />
                      <span className='sunnyMoon' />
                    </label>
                  )}
                </ThemeToggler>
            </span>

            <div onClick={toggleMenu} className= 'hambugerHolder'>
              <div className={openState ? 'hambuger open' : 'hambuger' }>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="contactMeGroupDesktop">

              <div className="contactMeMedium">
                <a target='blank' className="linkedIn" href={linkedInLink}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9412 0.537048C6.31375 0.537048 0.941162 5.90963 0.941162 12.537C0.941162 19.1645 6.31375 24.537 12.9412 24.537C19.5686 24.537 24.9412 19.1645 24.9412 12.537C24.9412 5.90963 19.5686 0.537048 12.9412 0.537048ZM6.70193 10.4759H9.4214V18.6468H6.70193V10.4759ZM9.60053 7.9484C9.58288 7.14725 9.00997 6.53705 8.07966 6.53705C7.14935 6.53705 6.54115 7.14725 6.54115 7.9484C6.54115 8.73295 7.13137 9.36072 8.04436 9.36072H8.06174C9.00997 9.36072 9.60053 8.73295 9.60053 7.9484ZM16.0977 10.2841C17.8873 10.2841 19.2288 11.4522 19.2288 13.9619L19.2287 18.6468H16.5094V14.2754C16.5094 13.1774 16.1159 12.4281 15.1314 12.4281C14.3801 12.4281 13.9326 12.9332 13.736 13.4211C13.6641 13.5959 13.6465 13.8395 13.6465 14.0837V18.647H10.9267C10.9267 18.647 10.9625 11.2429 10.9267 10.4762H13.6465V11.6335C14.0074 11.0771 14.6539 10.2841 16.0977 10.2841Z" fill="black"/>
                  </svg>
                </a>

                <a target='blank' className="twitter" href={twitterLink}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9412 0.537048C6.31375 0.537048 0.941162 5.90963 0.941162 12.537C0.941162 19.1645 6.31375 24.537 12.9412 24.537C19.5686 24.537 24.9412 19.1645 24.9412 12.537C24.9412 5.90963 19.5686 0.537048 12.9412 0.537048ZM12.6069 10.706L12.5818 10.2908C12.5062 9.21459 13.1693 8.2316 14.2185 7.85027C14.6047 7.71469 15.2594 7.69774 15.6875 7.81638C15.8553 7.86722 16.1743 8.0367 16.4009 8.18923L16.8122 8.46888L17.2655 8.32482C17.5173 8.24855 17.853 8.12144 18.0041 8.0367C18.1468 7.96044 18.2727 7.91807 18.2727 7.94349C18.2727 8.08755 17.9622 8.57904 17.702 8.85021C17.3494 9.23154 17.4501 9.26544 18.1636 9.01121C18.5917 8.86716 18.6001 8.86716 18.5161 9.02816C18.4658 9.1129 18.2056 9.40949 17.9286 9.68066C17.4585 10.1467 17.4334 10.1976 17.4334 10.5874C17.4334 11.189 17.148 12.4432 16.8626 13.1296C16.3338 14.4176 15.2006 15.7481 14.0675 16.4175C12.4726 17.3581 10.349 17.5954 8.56116 17.0446C7.9652 16.8582 6.94116 16.3836 6.94116 16.2989C6.94116 16.2735 7.25173 16.2396 7.62945 16.2311C8.41846 16.2141 9.20748 15.9938 9.87898 15.604L10.3322 15.3328L9.81183 15.1549C9.07318 14.9007 8.41007 14.316 8.24219 13.7651C8.19183 13.5872 8.20862 13.5787 8.67867 13.5787L9.16551 13.5702L8.75421 13.3753C8.26737 13.1296 7.82251 12.7144 7.60427 12.2907C7.44479 11.9856 7.24334 11.2145 7.30209 11.1551C7.31888 11.1297 7.49515 11.1806 7.6966 11.2484C8.27577 11.4602 8.35131 11.4094 8.01556 11.0535C7.38603 10.4094 7.19297 9.45186 7.49515 8.54514L7.63784 8.13839L8.19183 8.6892C9.32499 9.7993 10.6596 10.4603 12.1873 10.6552L12.6069 10.706Z" fill="black"/>
                  </svg>
                </a>

                <a target='blank' className="email" href={emailLink}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9412 24.537C19.5686 24.537 24.9412 19.1645 24.9412 12.537C24.9412 5.90963 19.5686 0.537048 12.9412 0.537048C6.31375 0.537048 0.941162 5.90963 0.941162 12.537C0.941162 19.1645 6.31375 24.537 12.9412 24.537ZM13.1084 11.8636C12.1709 11.8636 7.34116 9.12473 7.34116 9.12473V8.69705C7.34116 8.16713 7.77124 7.73705 8.30212 7.73705H17.9146C18.446 7.73705 18.876 8.16713 18.876 8.69705L18.8684 9.17705C18.8684 9.17705 14.0909 11.8636 13.1084 11.8636ZM18.8684 10.6171C18.8684 10.6171 14.136 13.1836 13.1084 13.1836C12.1709 13.1836 7.34836 10.6171 7.34884 10.6171L7.34116 16.3771C7.34116 16.907 7.77172 17.3371 8.30212 17.3371H17.9146C18.446 17.3371 18.876 16.907 18.876 16.3771L18.8684 10.6171Z" fill="black"/>
                  </svg>
                </a>
              </div>

            </div>

        </div>
      
    
    </div>
  </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header