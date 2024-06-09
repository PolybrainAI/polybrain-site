/*

Navigation menu to switch between portal sections

*/
import { logOut } from "../../api/api";

export default function PortalTree(props: {selectedMenu: string, deleteAccountModal: (open: boolean)=>void, }){
    return <>
    <button id="main-menu-btn" className={"btn-list-item " + (props.selectedMenu === "main-menu-btn" ? "selected" : "")}>
            <i className="bi bi-file-person"></i>
            Main Portal
          </button>
          <button disabled id="more-settings-btn" className={"btn-list-item " + (props.selectedMenu === "more-settings-btn" ? "selected" : "")}>
            <i className="bi bi-gear"></i>
            More Settings
          </button>
          <button
            className="btn-list-item"
            onClick={(ev) => {
              logOut();
            }}
          >
            <i className="bi bi-door-open"></i>
            Log Out
          </button>
          <button
            className={"btn-list-item " + (props.selectedMenu === "delete-account-button" ? "selected" : "")}
            style={{ color: "#E63939", top: "10px" }}
            id="delete-account-button"
            onClick={(ev) => {props.deleteAccountModal(true)}}
          >
            <i className="bi bi-exclamation-triangle"></i>
            Delete Account
          </button>
          </>
}