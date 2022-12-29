import { gql } from "@apollo/client";

    const GET_LISTS = gql`
    query MyQuery {
      launches {
        id
        mission_name
        launch_year
        rocket {
          rocket_name
          rocket_type
          rocket {
            description
          }
        }
        details
        links {
          flickr_images
          mission_patch
        }
      }
    }
  `;

export {GET_LISTS};