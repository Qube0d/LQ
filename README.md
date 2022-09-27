<h1 align="center">Test cases</h1>
<h3 align="center">Few steps how to run tests</h3>

Test cases for site https://www.redmine.org/

<b>Required software :

<p>* Download and install Node.js version 14 or above(<a href="https://nodejs.org/en/download/">download</a>). Playwright requires Node.js 14 or higher.</p>
<p>* Download and install Visual Studio Code(<a href="https://code.visualstudio.com/download">download</a>).</p>

Required steps to install:

<p>* Open Visual Studio Code.</p>
<p>* Open terminal and run the install command.</p>
<p>* npm init playwright@latest</p>
<p>* npm i -D experimental-allure-playwright</p>
<p>* npm i -D allure-commandline</p>

Running test:

<p>* npm run test</p>
<p>* npm run test:headed (Running tests in headed mode)</p>

Test reports:

<p>* npm run report:generate (to generate allure report)</p>
<p>* npm run report:open  (open allure report)</p>
