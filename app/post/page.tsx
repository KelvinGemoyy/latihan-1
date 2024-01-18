'use client'

import styles from './postpage.module.css'

const Posts = () =>  {
    return (

        <>
         <div className={styles.bgRed}>Post Page </div>
         <button onClick={() => console.log('Lihat User')}>Lihat user</button>
        </>
       
        )
}

export default Posts