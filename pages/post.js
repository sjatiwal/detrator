import Image from "next/image";
import "../styles/globals.css";
import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";

export default function post() {
  const [post, setPost] = useState([]);
  async function getPost() {
    try {
      const response = await fetch("https://fakestoreapi.com/products/", {
        method: "GET",
      });
      const data = await response.json();
      console.log(data);
      setPost(data);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getPost();
  }, []);

  const choices = [
    {
      type: "Like",
    },
    {
      type: "Share",
    },
    {
      type: "Subscribe",
    },
  ];

  const links = [
    {
      page: "Home",
    },
    {
      page: "Search",
    },
    {
      page: "Posts",
    },
    {
      page: "Live",
    },
  ];

  return (
    <div className="flex flex-row m-1 h-screen min-w-[400px] ">
      <div className="w-full border-2 border-black  overflow-scroll flex justify-center">
        <div>
          {post.length > 0
            ? post.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="imageDiv border-2 border-black m-2 w-[400px] h-auto"
                  >
                    <div className="flex flex-row">
                      <div className="border-2 border-black w-[40px] h-[40px] rounded-full my-3 ml-3"></div>
                      <div className="my-3 ml-3">User name</div>
                    </div>
                    <Image
                      src={`${item.image}`}
                      width={400}
                      height={450}
                      alt="image"
                      className="image mx-auto"
                    />
                    <div className=" flex flex-row place-content-around my-2">
                      {choices.map((item) => {
                        return <div>{item.type}</div>;
                      })}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className="border-2 border-black w-[20%]">
        <div className="flex flex-col">
          <div className="flex justify-center mt-5">
            <PersonIcon className="personIcon w-[200px] h-[200px] text-green-500" />
          </div>

          <div className="flex justify-center">User name</div>
        </div>
      </div>
      <div className=" relative border-2 border-black p-2">
        {links.map((item) => {
          return <div className="mt-5">{item.page}</div>;
        })}
        <div className="absolute bottom-2">Logout</div>
      </div>
    </div>
  );
}
