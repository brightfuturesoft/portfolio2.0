import React from 'react';
import { HiOutlineCodeBracket, HiOutlineCurrencyBangladeshi, HiOutlineWrenchScrewdriver, HiPhone } from 'react-icons/hi2';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import tailwind from '../../../Assctes/icon/tailwind.png'
import bootstrap from '../../../Assctes/icon/bootstrap.png'
import metarial from '../../../Assctes/icon/material UI.png'
import typescript from '../../../Assctes/icon/typeScript.png'
import react from '../../../Assctes/icon/react.png'
import redux from '../../../Assctes/icon/redux.png'
import js from '../../../Assctes/icon/javaScript.png'
import nextJs from '../../../Assctes/icon/nextjs-boilerplate-logo.png';
import ashtro from '../../../Assctes/icon/astro.png';
import nest from '../../../Assctes/icon/nest.js.png';
import vue from '../../../Assctes/icon/vue.js.png';
import angular from '../../../Assctes/icon/angular.png';

//backend
import nodejs from '../../../Assctes/icon/node.js.png'
import python from '../../../Assctes/icon/python.png'
import php from '../../../Assctes/icon/php.png'
import go from '../../../Assctes/icon/go.png'
import express from '../../../Assctes/icon/express.png'
import dj from '../../../Assctes/icon/dj.png'
import Laravel from '../../../Assctes/icon/laravel.png'
import Fastify from '../../../Assctes/icon/fastify.png'


//database
import mongo from '../../../Assctes/icon/mongodb.png'
import mysql from '../../../Assctes/icon/mySQL.png'
import postgres from '../../../Assctes/icon/postgress.png'
import firebase from '../../../Assctes/icon/firebase.png'
import Microsoft from '../../../Assctes/icon/microsoft SQL.png';
import Redis from '../../../Assctes/icon/redis.png';

//tools
import git from '../../../Assctes/icon/git.png';
import figma from '../../../Assctes/icon/figma.png'
import azure from '../../../Assctes/icon/azure.png'
import aws from '../../../Assctes/icon/aws.png'
import Jest from '../../../Assctes/icon/jest.png'
import Docker from '../../../Assctes/icon/docker.png'
import SonarQube from '../../../Assctes/icon/sonarQube.png'
import Postman from '../../../Assctes/icon/postman.png'
import slack from '../../../Assctes/icon/slack.png'
import graphql from '../../../Assctes/icon/graphql.png'

//mobile apps

import Swift from '../../../Assctes/icon/swift.png'
import Flutter from '../../../Assctes/icon/flatter.png'
import Kotlin from '../../../Assctes/icon/kotlin.png'
import Ionic from '../../../Assctes/icon/ionic.png'


// payment getaway

import ssl from '../../../Assctes/icon/ssl.png'
import strip from '../../../Assctes/icon/stripe.png'
import bkash from '../../../Assctes/icon/bkash.png'
import nogod from '../../../Assctes/icon/nogod.png'
import paypal from '../../../Assctes/icon/paypal.png';
import AmarPay from '../../../Assctes/icon/amarpay.png';


// import firebase from '../../../Assctes/icon/firebase.png'





const Technology = () => {

      const tData = [
            {
                  id: 0,
                  title: "Frontend Technology",
                  options: [
                        {
                              id: 0,
                              name: "tailwind", img: tailwind
                        },
                        {
                              id: 1,
                              name: "bootstrap", img: bootstrap
                        },
                        {
                              id: 2,
                              name: "metarial", img: metarial
                        },
                        {
                              id: 3,
                              name: "typescript", img: typescript
                        },
                        {
                              id: 4,
                              name: "react", img: react
                        },
                        {
                              id: 5,
                              name: "redux", img: redux
                        },
                        {
                              id: 6,
                              name: "java script", img: js
                        },
                        {
                              id: 7,
                              name: "next js", img: nextJs
                        },
                        {
                              id: 8,
                              name: "Astro", img: ashtro
                        },
                        {
                              id: 9,
                              name: "Nest.js", img: nest
                        },
                        {
                              id: 10,
                              name: "Angular", img: angular
                        },
                        {
                              id: 11,
                              name: "Vue", img: vue
                        }
                  ]
            },
            {
                  id: 1,
                  title: "Backend Technology",
                  options: [
                        {
                              id: 0,
                              name: "node js", img: nodejs
                        },
                        {
                              id: 1,
                              name: "Python", img: python
                        },
                        {
                              id: 2,
                              name: "PHP", img: php
                        },
                        {
                              id: 3,
                              name: "GO", img: go
                        },
                        {
                              id: 4,
                              name: "Express JS", img: express
                        },

                        {
                              id: 5,
                              name: "Django", img: dj
                        },
                        {
                              id: 6,
                              name: "Laravel", img: Laravel
                        },
                        {
                              id: 7,
                              name: "Fastify", img: Fastify
                        },
                  ]
            },
            {
                  id: 3,
                  title: "Database",
                  options: [
                        {
                              id: 0,
                              name: "MongoDB", img: mongo
                        },
                        {
                              id: 1,
                              name: "Firebase", img: firebase
                        },
                        {
                              id: 2,
                              name: "MySql", img: mysql
                        },
                        {
                              id: 3,
                              name: "Postgres", img: postgres
                        },
                        {
                              id: 4,
                              name: "Microsoft SQL", img: Microsoft
                        },
                        {
                              id: 5,
                              name: "Redis", img: Redis
                        }
                  ]
            },
            {
                  id: 2,
                  title: "Tools",
                  options: [
                        {
                              id: 0,
                              name: "Git", img: git
                        },
                        {
                              id: 1,
                              name: "figma", img: figma
                        },
                        {
                              id: 2,
                              name: "Azure", img: azure
                        },
                        {
                              id: 3,
                              name: "AWS", img: aws
                        },
                        {
                              id: 4,
                              name: "Jest", img: Jest
                        },
                        {
                              id: 5,
                              name: "Docker", img: Docker
                        },
                        {
                              id: 6,
                              name: "SonarQube", img: SonarQube
                        },
                        {
                              id: 7,
                              name: "Postman", img: Postman
                        },
                        {
                              id: 8,
                              name: "Slack", img: slack
                        },
                        {
                              id: 9,
                              name: "Graphql", img: graphql
                        }

                  ]
            },
            {
                  id: 3,
                  title: "Mobile App Development",
                  options: [
                        {
                              id: 0,
                              name: "React Native", img: react
                        },
                        {
                              id: 1,
                              name: "Swift", img: Swift
                        },
                        {
                              id: 2,
                              name: "Flutter", img: Flutter
                        },
                        {
                              id: 3,
                              name: "Kotlin", img: Kotlin
                        },
                        {
                              id: 4,
                              name: "Ionic", img: Ionic
                        }
                  ]
            },
            {
                  id: 4,
                  title: "Payment Gateways",
                  options: [
                        {
                              id: 0,
                              name: "SSLCOMMERZ ", img: ssl
                        },
                        {
                              id: 1,
                              name: "Stripe", img: strip
                        },
                        {
                              id: 2,
                              name: "Paypal", img: paypal
                        },
                        {
                              id: 3,
                              name: "Bkash", img: bkash,
                        },
                        {
                              id: 4,
                              name: "Nagad", img: nogod,
                        },
                        {
                              id: 5,
                              name: "AmarPay", img: AmarPay,
                        },

                  ]
            },
      ]
      return (
            <div>
                  <div className="tech-bg px-2 py-4 text-capitalize" id='tech'>
                        <h1 className="text-xl  font-bold relative after:absolute after:left-0 after:right-0 after:bottom-[-18px] after:w-[60px] after:rounded-full after:h-[6px] after:bg-[#0095ff] after:mx-auto text-center text-white">Our Technology <span className="shadow-tx">and Tools</span></h1>
                        <br /><br />
                        <VerticalTimeline className='text-white'>
                              {
                                    tData.map(tData => <VerticalTimelineElement key={tData.id}
                                          className="vertical-timeline-element--work"
                                          contentArrowStyle={{ borderRight: '7px solid  #ff000000', }}

                                          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                          icon={<HiOutlineCodeBracket />}
                                    >
                                          <div className="sp-box border rounded-r-lg rounded-bl-lg border-[#2a4892]  relative p-3">
                                                <div className="absolute top-[-28px] bg-[#2a4892] sp pl-2 pr-14  py-1 left-[-1px]">
                                                      <h1 className='md:text-md text-sm'>{tData.title}</h1>
                                                </div>
                                                <figure className='grid mt-4 grid-cols-6 gap-4'>
                                                      {
                                                            tData?.options?.map(td => <img className='border border-[#2096F3] rounded p-2 bg-[#474C5A] w-14 h-14 object-contain' loading="lazy" title={td.name} src={td.img} />)
                                                      }
                                                </figure>
                                          </div>
                                    </VerticalTimelineElement>)
                              }
                        </VerticalTimeline>
                  </div>
            </div>
      );
};

export default Technology;
