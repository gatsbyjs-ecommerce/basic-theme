import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import CouponItem from '../components/CouponItem';
import styled from 'styled-components';

const ContainerImage = styled.div`
  background-image: url(/images/bg.jpg);
  width: 100%;
  height: auto;
  padding: 5.8rem 0rem 2rem;
  margin-bottom: 3rem;

`;

export const couponsQuery = graphql`
  query Coupons {
    allSanityCoupon {
      edges {
        node {
          id
          title
          expiryDate
          discountPercentage
          description
          code
        }
      }
    }
  }
`;

export default class Coupons extends React.Component {
  render() {
    const { data } = this.props;
    const coupons = data.allSanityCoupon.edges;

    return (
      <Layout>
        <Seo
          title="Coupons"
          description="Get a best detals"
          url={`${config.siteUrl}/coupons`}
        />
          <div className="container">
          <ContainerImage>
            <Heading>Coupons</Heading>
          </ContainerImage>
            <div className="columns is-multiline">
              {coupons.map(coupon => (
                <div key={coupon.node.id} className="column is-one-third">
                  <CouponItem data={coupon.node} />
                </div>
              ))}
            </div>
          </div>
      </Layout>
    );
  }
}
