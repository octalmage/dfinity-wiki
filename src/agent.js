import { Actor, HttpAgent } from "@dfinity/agent"
import { idlFactory as wiki_idl, canisterId as wiki_id } from "dfx-generated/wiki"

const agentOptions = {
  host: "http://localhost:8000",
}

const agent = new HttpAgent(agentOptions)
const wiki = Actor.createActor(wiki_idl, { agent, canisterId: wiki_id })

export { wiki };