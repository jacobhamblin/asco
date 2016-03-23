import React, { Component } from 'react'

const animation = (begin) => {
  return {
    __html: '<animate attributeName="r" values="0; 8; 0; 0" dur="1.2s" repeatCount="indefinite" begin="' + begin + '" keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />'
  }
}

const Loading = () => {
  return (
    <svg className="loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
      <circle transform="translate(16 0)" cx="0" cy="16" r="0" dangerouslySetInnerHTML={animation("0")} />
      <circle transform="translate(32 0)" cx="0" cy="16" r="0" dangerouslySetInnerHTML={animation("0.3")} />
      <circle transform="translate(48 0)" cx="0" cy="16" r="0" dangerouslySetInnerHTML={animation("0.6")} />
    </svg>
  )
}

export default Loading
