import React from "react";
import "./UredxMarketing.scss";
import { NavLink } from "react-router-dom";

export default function UredxMarketing() {
  return (
    <>
      <div className="UredxMarketing_container">
        <div className="UredxMarketing_text_wrapper">
          <h2>Uredx's Promotional Programs</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            similique odio temporibus consectetur. Dicta soluta beatae eius
            excepturi, tempora saepe minima aspernatur perferendis
            necessitatibus asperiores, voluptatibus mollitia officia.
          </p>
          <p>
            Nemo, inventore placeat magni sequi repellat fugit repudiandae
            molestias non fuga excepturi aspernatur? Quia aliquid tenetur ipsum
            beatae pariatur inventore soluta quibusdam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            iure non consequatur est? Aliquam ipsam delectus, officia explicabo
            cupiditate iste.
          </p>
          <h2>Deals Program</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            aliquam officiis aut nihil earum eveniet? Exercitationem eum
            obcaecati quibusdam saepe distinctio maxime tempore nobis at,
            aperiam ducimus rerum quae tenetur.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            odio magnam excepturi amet cupiditate! Minima quam officiis
            repudiandae possimus, optio temporibus magni voluptatem, velit ad
            vero, maxime ipsum sit itaque.
          </p>

          <div className="UredxMarketing_checkbox_div">
            <input type="checkbox" />
            <p>
              I have read and agree to the Promotino Policy terms for the Uredx
              Deals Program.
            </p>
          </div>
          <h2>Uredx Business Program</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            inventore velit nam autem quas fuga sunt nesciunt totam error
            deleniti.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            veritatis, laborum odit impedit sunt iste. Ratione, aliquid eaque
            labore repudiandae veniam id, reprehenderit nostrum incidunt quis
            velit assumenda porro laudantium.Ratione, aliquid eaque labore
            repudiandae veniam id, reprehenderit nostrum incidunt quis velit
            assumenda porro laudantium.
          </p>
          <div className="UredxMarketing_checkbox_div">
            <input type="checkbox" />
            <p>
              I have read and agree to the Promotino Policy terms for the Uredx
              Deals Program.
            </p>
          </div>
          <i>
            Note that opening into these programs does not guarantee
            participation.
          </i>
          <div className="UredxMarketing_btn_div">
            <button className="UredxMarketing_btn">
              <NavLink
                to="/teacherdashboard/Teacher_payout_and_tax/Payout_tax_Details"
                id="UredxMarketing_btn_link"
              >
                Save and Continue
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
