<p align="center"><h1 align="center">SENTENTIA</h1></p>
<p align="center">
	Sententia is a modern blogging platform inspired by Pinterest's masonry layout while maintaining a traditional approach to blogging. Built with the MERN stack (MongoDB, Express, React, Node.js), Sententia provides a seamless experience for users to create, manage, and share their thoughts through blogs.
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/gaurav1452001/Sententia?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/gaurav1452001/Sententia?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/gaurav1452001/Sententia?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/gaurav1452001/Sententia?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

#### HOME PAGE
<img src="https://github.com/user-attachments/assets/745e0f21-a5f8-4dbe-a31c-403720a7d746" width="600" alt="desktop1">

#### MASONRY GRID
<img src="https://github.com/user-attachments/assets/62812310-6283-41ac-b199-97299d01eed6" width="600" alt="desktop2">

#### POST PAGE USING REACT-QUILL
<img src="https://github.com/user-attachments/assets/d539d667-9077-4c73-9d1d-bd7c2ba643b6" width="600" alt="postpage desktop">

#### LOGGED IN USER PAGE
<img src="https://github.com/user-attachments/assets/37c9b74e-6d8b-4e18-b461-dc908643ac66" width="600" alt="myblog desktop">

#### SEARCH RESULTS
<img src="https://github.com/user-attachments/assets/eaea6b5c-ea82-44a9-84d1-d85dd1da470a" width="600" alt="search desktop">


###  Client (React + Vite)
**React 18**, **Vite**, **Tailwind CSS**
```
 Routing with `react-router-dom`
 State management with `@tanstack/react-query`
 Masonry layout via `react-responsive-masonry`
 Rich text editor: `react-quill` with image resizing
 Notifications: `react-toastify`
 Animation: `lottie-react`
 Tooltips, social sharing, timeago formatting and more
```

###  Server (Node.js + Express)
**Express.js**, **MongoDB** via **Mongoose**
``` 
 User authentication and middleware with `@clerk/express`
 Image handling: `imagekit`
```
---

##  Features

-  **User Account Management**
  ```
   Sign up and log in using Clerk
   Change username and blog name
   Upload and update profile avatar and blog cover image
  ```

-  **Masonry Layout Inspired by Pinterest**
  ```
   Visually engaging grid layout for blog cards and post previews
  ```

-  **Blog Post Capabilities**
  ```
   Create, edit, and delete posts
   Rich text editing powered by Quill
   Infinite scrolling and responsive design
  ```
-  **Media and Image Support**
  ```
   Image uploads via ImageKit
   Drag and drop file uploads with `react-dropzone`
  ```

-  **Authentication & Security**
  ```
   Clerk-based auth (`@clerk/clerk-react`, `@clerk/express`)
   Environment-based secret management with `dotenv`
  ```

---

###  Project Structure
<details open>
	<summary><b><code>SENTENTIA/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- client Submodule -->
		<summary><b>client</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/postcss.config.js'>postcss.config.js</a></b></td>
				<td><code>❯ PostCSS configuration file</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ NPM dependencies lock file</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/vercel.json'>vercel.json</a></b></td>
				<td><code>❯ Vercel deployment configuration</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/tailwind.config.js'>tailwind.config.js</a></b></td>
				<td><code>❯ Tailwind CSS configuration</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/vite.config.js'>vite.config.js</a></b></td>
				<td><code>❯ Vite bundler configuration</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/package.json'>package.json</a></b></td>
				<td><code>❯ Project dependencies and scripts</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/index.html'>index.html</a></b></td>
				<td><code>❯ Main HTML entry point</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/.env.example'>.env.example</a></b></td>
				<td><code>❯ Environment variables template</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/eslint.config.js'>eslint.config.js</a></b></td>
				<td><code>❯ ESLint configuration file</code></td>
			</tr>
			</table>
			<details>
				<summary><b>src</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/index.css'>index.css</a></b></td>
						<td><code>❯ Global CSS styles</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/App.jsx'>App.jsx</a></b></td>
						<td><code>❯ Root React component</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/main.jsx'>main.jsx</a></b></td>
						<td><code>❯ Application entry point</code></td>
					</tr>
					</table>
					<details>
						<summary><b>styles</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/styles/quill-content.css'>quill-content.css</a></b></td>
								<td><code>❯ Quill text editor styles</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/HeroSec.jsx'>HeroSec.jsx</a></b></td>
								<td><code>❯ Hero section component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/Navbar.jsx'>Navbar.jsx</a></b></td>
								<td><code>❯ Navigation bar component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/UploadImg.jsx'>UploadImg.jsx</a></b></td>
								<td><code>❯ ImageKit Context</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/NoBlogsPlaceholder.jsx'>NoBlogsPlaceholder.jsx</a></b></td>
								<td><code>❯ Animation for no blogs</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/SearchUser.jsx'>SearchUser.jsx</a></b></td>
								<td><code>❯ User Page global</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/EditModal.jsx'>EditModal.jsx</a></b></td>
								<td><code>❯ Edit modal dialog</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/Footer.jsx'>Footer.jsx</a></b></td>
								<td><code>❯ Footer component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/ListBlogs.jsx'>ListBlogs.jsx</a></b></td>
								<td><code>❯ Blog list component for global</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/Searchbox.jsx'>Searchbox.jsx</a></b></td>
								<td><code>❯ Search input box</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/Coverdev.jsx'>Coverdev.jsx</a></b></td>
								<td><code>❯ Cover image for logged in user</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/DeleteModal.jsx'>DeleteModal.jsx</a></b></td>
								<td><code>❯ Delete confirmation modal</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/ListUserBlogs.jsx'>ListUserBlogs.jsx</a></b></td>
								<td><code>❯ User's blog list</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/SortButtons.jsx'>SortButtons.jsx</a></b></td>
								<td><code>❯ Sort controls component</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/Spinner.jsx'>Spinner.jsx</a></b></td>
								<td><code>❯ Loading spinner</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/SearchResults.jsx'>SearchResults.jsx</a></b></td>
								<td><code>❯ Search results header</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/components/BlogCard.jsx'>BlogCard.jsx</a></b></td>
								<td><code>❯ Blog preview card</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>pages</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/pages/UserBlog.jsx'>UserBlog.jsx</a></b></td>
								<td><code>❯ Logged In User blog page</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/pages/WriteBlog.jsx'>WriteBlog.jsx</a></b></td>
								<td><code>❯ Blog editor page</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/pages/ReadBlog.jsx'>ReadBlog.jsx</a></b></td>
								<td><code>❯ Blog reader page</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/pages/WriteBlog.css'>WriteBlog.css</a></b></td>
								<td><code>❯ Blog editor styles</code></td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/pages/Home.jsx'>Home.jsx</a></b></td>
								<td><code>❯ Homepage component</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>utils</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/client/src/utils/cn.js'>cn.js</a></b></td>
								<td><code>❯ tailwind merge class utility</code></td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- server Submodule -->
		<summary><b>server</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/package-lock.json'>package-lock.json</a></b></td>
				<td><code>❯ NPM dependencies lock file</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/vercel.json'>vercel.json</a></b></td>
				<td><code>❯ Vercel deployment config</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/package.json'>package.json</a></b></td>
				<td><code>❯ Server dependencies</code></td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/server.js'>server.js</a></b></td>
				<td><code>❯ Express server entry</code></td>
			</tr>
			</table>
			<details>
				<summary><b>config</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/config/db.js'>db.js</a></b></td>
						<td><code>❯ Database configuration</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>controllers</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/controllers/user.controller.js'>user.controller.js</a></b></td>
						<td><code>❯ User logic handlers</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/controllers/webhooks.js'>webhooks.js</a></b></td>
						<td><code>❯ Webhook handlers</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/controllers/post.controller.js'>post.controller.js</a></b></td>
						<td><code>❯ Post logic handlers</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>models</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/models/post.js'>post.js</a></b></td>
						<td><code>❯ Post data model</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/models/user.js'>user.js</a></b></td>
						<td><code>❯ User data model</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>routes</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/routes/post.route.js'>post.route.js</a></b></td>
						<td><code>❯ Post API routes</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/routes/user.route.js'>user.route.js</a></b></td>
						<td><code>❯ User API routes</code></td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/routes/webhook.route.js'>webhook.route.js</a></b></td>
						<td><code>❯ Webhook routes</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>middleware</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/gaurav1452001/Sententia/blob/master/server/middleware/increaseVisit.js'>increaseVisit.js</a></b></td>
						<td><code>❯ Visit counter middleware</code></td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
##  Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB Atlas or local MongoDB
- Clerk and ImageKit accounts with credentials

###  Installation

**1. Clone the Sententia repository:**
```sh
❯ git clone https://github.com/gaurav1452001/Sententia
```

**2. Set Up the Client**
```sh
❯ cd client
```
```sh
❯ npm install
```
```sh
❯ npm run dev
```

**3. Set Up the Server:**
```sh
❯ cd ../server
```
```sh
❯ npm install
```
```sh
❯ npm run server
```

---

##  Contributing

- **💬 [Join the Discussions](https://github.com/gaurav1452001/Sententia/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/gaurav1452001/Sententia/issues)**: Submit bugs found or log feature requests for the `Sententia` project.
- **💡 [Submit Pull Requests](https://github.com/gaurav1452001/Sententia/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/gaurav1452001/Sententia
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/gaurav1452001/Sententia/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=gaurav1452001/Sententia">
   </a>
</p>
</details>

---

##  License

This project is protected under the MIT License. For more details, refer to the License file.

##  Acknowledgments

- **💬 [Pinterest](https://pinterest.com/)**.
- **💬 [Medium](https://medium.com/)**
- **💬 [MasonryGrid](https://masonry.desandro.com/)**

---
