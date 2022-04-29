import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Paper } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const MenuList = () => {
  const data = [
    { code: "AD", name: [{ name: "Andorra", price: 90, pricehome: 100 }] },
    {
      code: "AE",
      name: [{ name: "Andorra", price: 90, pricehome: 100 }],
    },
    {
      code: "AF",
      name: [
        { name: "Andorra", price: 90, pricehome: 100 },
        { name: "chauhoaivu", price: 330, pricehome: 200 },
      ],
    },
    { code: "AG", name: [{ name: "Andorra", price: 90, pricehome: 100 }] },
  ];

  let count = 0;

  const onclick = (data) => {
    console.log(data);
  };

  return (
    <div style={{ width: "250px", marginLeft: "10px", marginTop: "10px" }}>
      <Paper>
        {data.map(({ code, name }) => (
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{
              minHeight: 40,
              flexGrow: 1,
              maxWidth: 400,
              overflowY: "auto",
            }}
          >
            <TreeItem nodeId={`${count++}`} label={code}>
              {name.map((item) => (
                <Link to="/Chart">
                  <TreeItem
                    nodeId={`${count++}`}
                    label={item.name}
                    key={count}
                    onClick={() => onclick({ code, item })}
                  />
                </Link>
              ))}
            </TreeItem>
          </TreeView>
        ))}
      </Paper>
    </div>
  );
};
export default MenuList;
