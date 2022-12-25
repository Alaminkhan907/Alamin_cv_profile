import { useState, useEffect } from "react";

export default function Blog() {
  const [mediumData, setMediumData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oaluna`
    )
      .then((res) => res.json())
      .then((response) => {
        setMediumData(response.items);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const finalData = mediumData.slice(1, 7);

  return (
    <section id="blog">
      <div className="container px-1 lg:px-6 py-32 m-auto">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12">
          <div className="col-span-4 md:col-span-8 lg:col-span-12">
            <h5 className="sub_title uppercase text-slate-900">Blog</h5>
            <h3 className="main_title font-semibold text-slate-700 leading-8 pb-12">
              My most recent blog posts. Click{" "}
              <a
                href="https://medium.com/@alaminkhan907"
                className="text-sky-400"
              >
                {" "}
                here{" "}
              </a>
              to read more.
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
          {finalData.map((article) => (
            <>
              <div key={article.id} className="col-span-4">
                <div className="overflow-hidden h-full bg-zinc-200 rounded shadow-md text-slate-700 shadow-zinc-900/20">
                  <img
                    src={article.thumbnail}
                    alt="card"
                    className="aspect-video"
                  />

                  <div className="p-4">
                    <header className="flex gap-4 mb-4">
                      <a
                        href={article.link}
                        className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                      >
                        <img
                          src="https://img.freepik.com/free-icon/football-player_318-923071.jpg?t=st=1666479531~exp=1666480131~hmac=aee4344f48472d27e8b5ec54a65a0969166b6bfafa363b9ca49154b84f464cfa"
                          alt="Oscar Luna"
                          title="Oscar Luna"
                          width="48"
                          height="48"
                          className="max-w-full rounded-full bg-sky-300"
                        />
                      </a>
                      <div className="h-full">
                        <h3 className="h-16 text-xl font-semibold tracking-tighter leading-tight md:leading-relaxed text-slate-900">
                          {article.title}
                        </h3>
                        <p className="text-sm text-slate-700 mt-12 md:mt-0">
                          {" "}
                          By {article.author}, {article.pubDate}
                        </p>
                      </div>
                    </header>
                  </div>

                  <div className="flex justify-end gap-2 p-4 pt-0">
                    <a href={article.link}>
                      <button className="inline-flex underline items-center justify-center h-10 gap-2 px-5 text-sm font-semibold tracking-wide transition duration-300 bg-transparent rounded justify-self-center whitespace-nowrap text-blue-400 disabled:cursor-not-allowed disabled:text-purple-300 disabled:shadow-none disabled:hover:bg-transparent hover:text-sky-400">
                        <span>Read more</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
