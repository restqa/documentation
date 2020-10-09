import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function Redirect() {
  if (ExecutionEnvironment.canUseDOM) {
    window.location.href = "/docs/"
  }
  return (
    <div>
      Welcome to Resume Backend
    </div>
  );
}

export default Redirect;
