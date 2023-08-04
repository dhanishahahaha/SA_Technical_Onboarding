/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/notes-and-laptop.jpg";

const imageAltText = "desktop with notes";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "spam and not spam text classifier 🎉",
    description: "classifies the text weather it is spam or not typed by the user.",
    url: "https://github.com/dhanishahahaha/spam-not_spam_text_classifier_project",
  },
  {
    title: "movie recommender system",
    description: "recommends movies to the user based on the selected movie from the list",
    url: "https://github.com/dhanishahahaha/Movie_recommender_system_project",
  },
  {
    title: "ipl cricket win probability",
    description: "predicts the winning probability of the teams playing cricket in ipl",
    url: "https://github.com/dhanishahahaha/IPL_win_probability_project",
  },
  {
    title: "linear regression calories project",
    description: "predicts the calories burnt by the person based on the user inputs.",
    url: "https://github.com/dhanishahahaha/linear_regression_project",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
