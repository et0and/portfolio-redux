# Portfolio Redux

![Screenshot of website](tomso.webp)

Built using [Eleventy](https://www.11ty.dev/), and forked from Sam Baldwin and Piper Haywood's [Portfolio Starter](https://portfolio-starter.sb-ph.com/) theme. All thanks and credits to them - all I have done is hack the project to my liking.

Key changes in this fork include:
  - some package updates for security and stability
  - styling changes for better mobile navigation
  - ability to search blog posts using [pagefind](https://github.com/cloudcannon/pagefind)
  - automated monthtly broken link checker, powered by GitHub Actions and [lychee](https://github.com/lycheeverse/lychee)

This is a great template to use for showcasing work. It is lightweight, simple to read and only requires knowledge of Markdown to post.

As it is built with Eleventy, it is possible to connect a CMS such as [Tina](https://tina.io) or [Decap](https://decapcms.org/) to allow for WYSIWYG content publishing. I plan on adding this and documenting the steps here in a future update. 

### Building and deploying

Simply fork/clone this repo, then use `npx @11ty/eleventy --serve` in the directory to develop and edit content locally.

To deploy and host this site, I recommend [Vercel](https://vercel.com) (formerly known as ZEIT). [Netlify](https://netlify.com) is also a good choice. Your forked repo can be built and deployed from Vercel. It should now detect that it is Eleventy and do this automatically, but if it doesn't simply add the following before beginning the building process:

Build command: `npx @11ty/eleventy`
Output directory: `_site`

If you want to use pagefind on your site, modify the build command to be `npx @11ty/eleventy && npx -y pagefind --site _site`

From the Vercel dashboard you can set things like analytics, custom domains, and so on.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/et0and/portfolio-redux)

