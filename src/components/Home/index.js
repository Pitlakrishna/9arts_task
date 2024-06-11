import React from 'react'
import HomePage from '../Homepage'
import "./index.css"
import Banner from '../banner'
import AnimationChart from '../barChart'
import Footer from '../Footer'
import Layout from '../Layout/layout'

const Home = () => {
    return (
        <Layout className='home-background-container' >
            <HomePage />
            <Banner />
            <div className='animation-chart-bg-container'>
                <AnimationChart />
            </div>
        </Layout>
    )
}

export default Home
