# CypressAutomationPractice
Basic Cypress Framework to automate Automation Practice web page

Preconditions to run the test:

1. Install the Node JS LTS version : https://nodejs.org/es/

How to run the tests:

1. Clone the Automation practice repo in your local machine: git clone https://github.com/romecam16/CypressAutomationPractice.git

2. Run the following command in the repo folder and wait for the dependencies to be installed: 
npm install

3. Run the test suites through command line using the npm script specifiend in the package.json:

npm test

Or run the test cases included in the tests\UI folder (ContactForm.spec.js) using the cypress interactive open mode executing the following command:

npx cypress open

After the execution modal is open click on the contactForm.spec.js option and the execution of the suite will start.

4. A mochawesome test execution report is generated once the npm test process is finished.
To view it, just open the mochawesome.html generated under the results folder file in any browser.