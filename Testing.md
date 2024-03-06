## Functional Testing

---

| Page       | Test                                                                                   | Completed successfully |
| :--------- | :------------------------------------------------------------------------------------- | :--------------------: |
| All        | Navigation links to relevant pages                                                     |          Yes           |
| All        | Navigation hover effect                                                                |          Yes           |
| All        | Navigation takes over 80% of the screen when toggled on mobile                         |          Yes           |
| Homepage   | Text flex responsively                                                                 |          Yes           |
| Homepage   | Username responds after submission                                                     |          Yes           |
| Homepage   | New game starts when user clicks 'Start' button                                        |          Yes           |
| Game       | New game loads questions randomly                                                      |          Yes           |
| Game       | Scoreboard increments number of correct and incorrect answers                          |          Yes           |
| Game       | Green border is applied to correct answer and red border is applied to incorrect answer|          Yes           |
| Game       | Push current question out of question array                                            |          Yes           |
| Game       | Time out and Reset                                                                     |          Yes           |
| Game       | Final Score is displayed                                                               |          Yes           |
| End Game   | Congratulations and Restart                                                            |          yes           |
| Game Score | Previous scores are displayed                                                          |          not yet       |


## Validator Testing

---

### HTML

[W3C Markup Validator](https://validator.w3.org/)

- No errors were returned when passing through the official W3S validator

<details>
<summary>Result</summary>
Home Page

![HTML Validator Home Page](assets/images/readme_images/Home_Validator.png)

ResetGameOver Page

![HTML Validator REsetGameOver Page](assets/images/readme_images/ResetGameOver_Validator.png)

Game Over Page

![HTML Validator Game Over Page](assets/images/readme_images/GameOver_Validator.png)

</details>


### CSS 

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

This test returned no errors.
Results of the CSS test of style.css:

<details>
<summary>Result</summary>

- No errors were found when passing through the official (Jigsaw) validator
CSS Validator Results

![CSS Validator](assets/images/readme_images/CSS_Validator.png)

</details>


### JS

[JSHint JS Validator](https://jshint.com/)

All JavaScript files were validated through JSHint.

<details>
<summary>Result</summary>

![Screenshot of JSHint testing](assets/images/readme_images/JS.png)

</details>


## LightHouse

---

Lighthouse was used (accessed through Developer Tools in Chrome) to analyse for the following:

- Performance
- Accessibility
- Best practice
- SEO


<details>
<summary>Homepage</summary>

![Lighthouse Test Home page](assets/images/readme_images/Lighthouse1.png)

</details>
<details>
<summary>ResetGameOver Page</summary>

![Lighthouse ResetGameOver page](assets/images/readme_images/Lighthouse3.png)

</details>
<details>
<summary>GameOver Page</summary>

![Lighthouse GameOver page](assets/images/readme_images/Lighthouse2.png)

</details>


