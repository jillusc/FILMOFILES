# FILMOFILES

<B>FILMOFILES</B> is a modern film-discovery app built with live data from the TMDb API. It is designed for browsing, exploring and learning about films in a clean and stylish, responsive interface. The aesthetic is cinematic: deep colours with bright accents mimic the experience of sitting in a dark theatre.

<img src="README%20images/home-page.jpg">
<br>
The live app can be viewed here: <a href="https://filmofiles-app.vercel.app/">FILMOFILES</a>

## Overview

When the user opens the browse page, Filmofiles presents an initial collection of 20 films fetched by popularity in a grid layout. Here, there are several interactive features: a search bar retrieves results across the full TMDb catalogue (excluding adult content); a dropdown menu allows sorting alphabetically, by rating or release year, and the sidebar enables filtering the visible films by genre. Clicking a film card opens a modal that enlarges the layout and displays the film's details plus overview text in addition. Navigation is fast and seamless because all routing is handled client-side.

The app consists of four main areas:

- a landing page with a cinematic background image and introductory text
- the main Browse page with the films grid and filters
- the modal that displays individual film details
- an About page outlining the concept, design and future direction of the project.

## Functionality

The Browse page is the core of the experience. It loads with a grid of 20 films returned from TMDb’s "popular" endpoint. Searching triggers a fresh API request and replaces the grid with matching results. Sorting and filtering are performed client-side, so the interface feels immediate and fluid. The 'Genres' sidebar filters the results dynamically without a page reload, and can be combined with searching and sorting. The film details modal uses the same layout as the card but expanded for readability. Film results without a poster image or rating are intentionally filtered out so the grid stays visually consistent and avoids displaying incomplete or low-quality entries.

## Features

### Responsive layout

The app is fully responsive and adapts from mobile screens up to large desktops. On mobiles, the header collapses into a burger menu; the layout becomes a single column, and the sidebar disappears to keep the main content maximised.

### Design

The visual design takes inspiration from the experience of film-watching and the interior of a darkened cinema.

- a deep teal and charcoal palette forms the base of the colour scheme, with bright accent colours reflecting the sense of artificial light glowing in the darkness
- the logo uses a subtly grainy typeface (Workbench), reminiscent of vintage VHS labels, adding a hint of nostalgia
- the sole font, Montserrat, is used throughout the site for clarity and consistency
- the homepage features a full-screen cinema photograph to instantly establish the theme
- the Browse grid uses clear, uniform film cards built around the poster images from TMDb
- the modal transition and all hover effects are gentle and unobtrusive, giving the interface a refined and sophisticated vibe.

Loading skeletons show while films are being fetched, providing a visual cue that enhances user experience.

<br><br>
<img src="README%20images/browse-grid.jpg">

### Film Details Modal

Instead of navigating to a separate page, film details appear in a styled modal that enlarges the selected film card. The modal reveals the overview and key metadata without taking the user away from the browsing flow. This approach keeps the experience fast and non-disruptive while still giving enough information to form an impression of the film:

<img src="README%20images/modal-image.jpg">

### Load more button

A 'Load More' button appears beneath the film grid and fetches the next batch of 20 results from TMDb, appending them to the existing grid to keep the browsing flow continuous and uninterrupted.

## About page

The About page presents the purpose of Filmofiles and provides background on the project's origins. The original version was a full-stack film review platform built with Django and PostgreSQL; the current version is a streamlined front-end rebuild focused purely on browsing and discovery. An accordion section on the page answers common questions about the redesign and potential future development.

## Technical details

- built with Next.js and TypeScript
- styled with Tailwind CSS
- all film data is fetched directly from the TMDb API
- client-side requests are handled through Next.js utilities
- the interface is built with Next.js, TypeScript and Tailwind CSS
- UI elements and icons are provided by React Icons and small Next.js components.

## Improvements

Because the app intentionally excludes any films missing a poster or rating from display, the initial set of results may contain fewer than 20 items: a worthwhile improvement would be to fetch additional films until the full count is reached, keeping the grid visually balanced on every fetch.

A longer-term improvement would be to expand Filmofiles back into a full community platform, similar to the original version of the project. The homepage already hints at a space for reading users’ reviews and discovering recommendations, but the current build focuses solely on browsing film data. Reintroducing reviews, comments and user profiles would elevate the app from a discovery tool to a complete social film-sharing experience.

## Testing

Filmofiles was tested in Chrome, Firefox, Edge and Safari browsers. All core interactions behave as expected: the initial fetch loads correctly, the search bar returns matching results, sorting updates instantly, and the genre filters combine with other controls. The film-details modal opens and closes reliably, and the layout remains stable as cards are replaced or rearranged.
The layout was checked at a variety of screen widths to confirm spacing, alignment and card behaviour remained consistent, and on mobile screens the single-column layout displays correctly and the sidebar hides as intended.
HTML and CSS pass W3C validation. Lighthouse was used to assess accessibility.

## Deployment

The app is deployed through Vercel. Each push to the main branch triggers a redeploy, keeping the live site up to date. Build optimisation, routing and asset delivery are handled automatically by Vercel, so the repository remains clean and focused on the source code.

## Credits

- film data is provided by the TMDb API\*
- fonts are provided by Google Fonts
- icons are from React Icons
- background photography and the popcorn image (used on the 404 page) were sourced from Pixabay
- general troubleshooting support from ChatGPT.

<sub>\*This project uses the TMDb API but is not endorsed or certified by TMDb.</sub>
<br>
<br>
<img src="README%20images/404-page.jpg">
