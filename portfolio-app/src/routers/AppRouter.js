import Welcome from '../components/Welcome'
import Contact from '../components/Contact'
import Portfolio from '../components/Portfolio'
import PortfolioSpecific from '../components/PortfolioSpecific'
import NotFoundPage from '../components/NotFoundPage'
import Header from '../components/Header'
import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Welcome} exact={true} />
                <Route path="/Portfolio" component={Portfolio} exact={true} />
                <Route path="/Portfolio/:id" component={PortfolioSpecific} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;