import React from 'react';
import Navbar from '../components/Navbar';
import sample_user from "../assets/sample_user.jpg";
import example_pic1 from "../assets/example_pic1.jpeg";
import example_pic2 from "../assets/example_pic2.webp";
import example_pic3 from "../assets/example_pic3.webp";
import Footer from '../components/Footer';

const ReadBlog = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-28 mx-44'>
        <aside className="fixed left-0 z-40 w-64 ml-24  transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div className="h-full overflow-y-auto p-3">
            <ul className="space-y-1 text-sm flex flex-col">
              <li>
                <a href="#" className="flex items-center p-2 hover:text-zinc-300 text-[#999999]">
                  <span className="ms-3">Design Criteria</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:text-zinc-300 text-[#999999]">
                  <span className="flex-1 ms-3 whitespace-nowrap">Achieving LSP-Usability</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:text-zinc-300 text-[#999999]">
                  <span className="flex-1 ms-3 whitespace-nowrap">Achieving Runnability</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center p-2 hover:text-zinc-300 text-[#999999]">
                  <span className="flex-1 ms-3 whitespace-nowrap">Open Questions</span>
                </a>
              </li>
    
            </ul>
          </div>
        </aside>

        <div className="pl-4 pt-3 flex flex-col sm:ml-36 ">
          <span className='text-[#CCCCCC]'>
            ← BACK TO HOME PAGE
          </span>
          <span className='text-[#999999] mt-7'>
            September 1, 2024
          </span>
          <div className='text-6xl font-semibold mt-3'>
          The Nonwriter's Guide to Writing
          </div>   
          <div className='text-[#B3B3B3] mt-7'>
          Toxic Preconditions (And How to Fight Them)  
          </div>
          <div className='flex flex-row mt-9 gap-5 text-lg'>
            <img src={sample_user} className='size-9 md:size-12 rounded-md' alt="" />
            <div className='flex flex-col'>
              <span className='text-[#CCCCCC] text-base'>Posted By Jacob</span>
              <span className='text-[#B3B3B3] text-base'>19 minutes read</span>
            </div>
          </div>

          <hr class="h-px my-8 bg-neutral-800 border-0"></hr>
           <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laborum animi! Fugit, nam autem. Vitae provident similique accusantium earum totam corrupti culpa quibusdam, alias itaque dolore enim aperiam? Cumque, vitae voluptatibus. Rerum quibusdam nulla ipsa nostrum dolorum unde repellat tempore, ut doloremque.<br/> <br/>
            Non aperiam esse labore fuga perferendis fugit quam veniam sequi inventore tempore, laudantium vero! Possimus nam recusandae saepe tenetur officiis, illum maiores, blanditiis <br/><br/>
            unde corrupti sequi repellat quam voluptates perferendis aliquam iusto, repellendus numquam veniam harum? Sequi ad, expedita eos doloribus in esse earum eligendi voluptatum repellendus a provident pariatur hic porro libero explicabo repudiandae aut perferendis consequatur?
            </div>
            <img src={example_pic1} className='py-14 rounded-lg' alt="" />   
            <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laborum animi! Fugit, nam autem. Vitae provident similique accusantium earum totam corrupti culpa quibusdam, alias itaque dolore enim aperiam? Cumque, vitae voluptatibus. Rerum quibusdam nulla ipsa nostrum dolorum unde repellat tempore, ut doloremque.<br/> <br/>
            Non aperiam esse labore fuga perferendis fugit quam veniam sequi inventore tempore, laudantium vero! Possimus nam recusandae saepe tenetur officiis, illum maiores, blanditiis <br/><br/>
            unde corrupti sequi repellat quam voluptates perferendis aliquam iusto, repellendus numquam veniam harum? Sequi ad, expedita eos doloribus in esse earum eligendi voluptatum repellendus a provident pariatur hic porro libero explicabo repudiandae aut perferendis consequatur?
            </div>   
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReadBlog;
