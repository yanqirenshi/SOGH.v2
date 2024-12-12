import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as page from './pages/index.js';
import * as page_docs from './pages/docs/index.js';
import Loading from './panels/Loading.js';

import Home from './pages2/Home.js';
import Organaization from './pages2/Organaization.js';
import OrgTeam from './pages2/OrgTeam.js';
import OrgTeamProject from './pages2/OrgTeamProject.js';

export default function Router () {
    return (
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/organaizations/:login' element={<Organaization/>} />
          <Route path='/organaizations/:login/teams/:team_name' element={<OrgTeam/>} />
          <Route path='/organaizations/:login/teams/:team_name/projects/:prj_number' element={<OrgTeamProject/>} />

          {/* == iHub ================================================================ */}
          <Route path='/cockpit'
                 element={<Suspense fallback={<Loading/>}>
                            <page.Cockpit/>
                          </Suspense>} />
          <Route path='/help'                      element={<page.Help/>} />
          <Route path='/markets'                   element={<page.Markets/>} />
          <Route path='/business'                  element={<page.Business/>} />
          <Route path='/design'                    element={<page.Design/>} />
          <Route path='/screens'                   element={<page.Screens/>} />
          <Route path='/data'                      element={<page.Data/>} />
          <Route path='/classes'                   element={<page.Classes/>} />
          <Route path='/external-resources'        element={<page.ExternalResources/>} />
          <Route path='/system-environment'        element={<page.SystemEnvironment/>} />
          <Route path='/message'                   element={<page.Messages/>} />
          <Route path='/devops'                    element={<page.DevOps/>} />
          <Route path='/wbs'                       element={<page.Wbs/>} />
          <Route path='/wbs/:wbs_id'               element={<page.WbsNode/>} />
          {/* == Docs ================================================================ */}
          {/* ux */}
          <Route path='/systemic-design'       element={<page.SystemicDesign/>} />
          <Route path='/systemic-design/:name' element={<page.SystemicDesignContents/>} />
          {/* == ui ================================================================ */}
          {/* { path: '/screens'                   element={page }, */}
          {/* { path: '/assemblies'                element={page }, */}
          {/* { path: '/parts'                     element={page }, */}
          <Route path='/batchs'                    element={<page.Batchs/>} />
          <Route path='/actions'                   element={<page.Actions/>} />
          {/* == Etc ================================================================ */}
          <Route path='/system-dynamics'           element={<page.SystemDynamics/>} />
          <Route path='/ddd'                       element={<page.DDD/>} />
          <Route path='/account'                   element={<page.Account/>} />
          <Route path='/auth'                      element={<page.Auth/>} />
          {/* == Docs ================================================================ */}
          <Route path='/bpmn'                      element={<page_docs.BPMN/>} />
          <Route path='/classes'                   element={<page_docs.Classes/>} />
          <Route path='/customer-journey-map'      element={<page_docs.CustomerJourneyMap/>} />
          <Route path='/er'                        element={<page_docs.ER/>} />
          <Route path='/procedures'                element={<page_docs.Procedures/>} />
          <Route path='/screen-transition-diagram' element={<page_docs.ScreenTransitionDiagram/>} />
          <Route path='/tm'                        element={<page_docs.TM/>} />
          <Route path='/uml'                       element={<page_docs.UML/>} />
          <Route path='/use-case'                  element={<page_docs.UseCase/>} />
          <Route path='/user-scenario'             element={<page_docs.UserScenario/>} />
          <Route path='/pad'                       element={<page_docs.PAD/>} />
        </Routes>
    );
}
