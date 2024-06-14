<a name="readme-top"></a>
<br />
<div align="center">
  <a href="https://mayden.co.uk/">
    <img src="https://mayden.co.uk/wp-content/uploads/2018/03/mayden_logotype_web_2018.svg" alt="Logo">
  </a>

  <h3 align="center">Shopping List Application</h3>

  <p align="center">
    A simple shopping list application written for the Mayden Developer

Recruitment Coding Challenge 
    <br />
    <a href="https://github.com/dave-thomson-dev/challenge.pdf"><strong> Read the challenge »</strong></a>
    <br />
    <br />
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

As a healthcare company Mayden has a keen eye on healthy eating and this app is intended to be an easy way to keep track of what needed, what needs to be
purchased and to keep spending within the budget constraints.

![alt text](https://github.com/dave-thomson-dev/mayden-tech-test/blob/feature/shopping-list/images/screenshot.png?raw=true)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* Node.js version >= v18.17.0 is required.

Node version manger ([nvm](https://github.com/nvm-sh/nvm)) is useful for switching node versions. 


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dave-thomson-dev/mayden-tech-test.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the app
   ```sh
   npm run dev
   ```
3. Open your browser

   [http://localhost:3000/](http://localhost:3000/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The shopping list is simple and easy to use.

* Use the form to add new items to the shopping list.  
* Items can be completed by ticking the checkbox next to the item.
* Items can be removed by tapping delete next to the item.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Tests
Run the tests
   ```sh
   npm test
   ```
 [Storybook](https://storybook.js.org/) is a great way to display, document and test a component library. Unfortunately I ran into issues setting it up.
 
  [Cypress](https://www.cypress.io/) would have be used for end to end tests if I had more time.

<!-- ROADMAP -->
## Roadmap

- [x] View a list of items on a shopping list
- [x] Add items to the shopping list
- [x] Remove stuff from the shopping list
- [x] When I’ve bought something from my list I want to be able to cross it off the list
- [ ] Persist the data so I can view the list if I move away from the page
- [ ] I want to be able to reorder items on my list
- [ ] Total up the prices
- [ ] Put a spending limit in place, alert me if I go over the limit
- [ ] I want to share my shopping list via email
- [ ] User and password protect

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
