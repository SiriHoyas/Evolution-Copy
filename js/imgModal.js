export function expandImg(post) {
  const imgClass = document.querySelector(".post-featured-img");
  const modal = document.querySelector(".modal");

  imgClass.addEventListener("click", expand);
  window.addEventListener("click", close);

  function close(event) {
    if (event.target === modal) {
      modal.style.display = "none";
      document.querySelector(".blog-post-spesific-body").classList.remove("disable-scroll");
    }
  }

  function expand() {
    document.querySelector(".modal").innerHTML = `<img src="${post.featured_media_src_url}" alt="${post.acf.imgAlt}" class="expanded-img">`;
    document.querySelector(".modal").style.display = "flex";
    document.querySelector(".blog-post-spesific-body").classList.add("disable-scroll");
  }
}
