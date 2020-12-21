import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import pollService from "../services/pollService";
import { useList, useListVals } from "react-firebase-hooks/database";

const List = () => {
  const [polls] = useList(pollService.getAll());
  polls.reverse();
  // console.log(polls)

  const key = "-MP5ajCFj95G7LkLefJV";
  const [optiony] = useListVals(pollService.getWinnerOption(key));
  optiony.reverse();
  console.log(optiony);

  return (
    <div class="col-sm">
      <h6 className="list-title"> Latest Polls</h6>

      {polls &&
        polls.map((poll, index) => (
          <div key={polls.poll_id} className="list-item">
            <Link className="btn list-link" to={`/poll/${poll.key}`}>
              <a target="_blank">
                <h1>{poll.val().title} </h1>
                <h3 className="item-option">Option </h3>
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default List;
