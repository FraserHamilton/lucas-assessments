// First, we must import the schema creator

import contact from './objects/contact'
import createSchema from 'part:@sanity/base/schema-creator'
import cta from './objects/cta'
import embedHTML from './objects/embedHTML'
import figure from './objects/figure'
import hero from './objects/hero'
import how from './objects/how'
import imageSection from './objects/imageSection'
import internalLink from './objects/internalLink'
import labelGroup from './objects/labelGroup'
import link from './objects/link'
import mailchimp from './objects/mailchimp'
import page from './documents/page'
import portableText from './objects/portableText'
import route from './documents/route'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import simplePortableText from './objects/simplePortableText'
import siteConfig from './documents/siteConfig'
import textSection from './objects/textSection'
import who from './objects/who'

// Then import schema types from any plugins that might expose them

// Document types

// Object types

// Landing page sections

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    cta,
    embedHTML,
    figure,
    hero,
    labelGroup,
    contact,
    who,
    how,
    imageSection,
    internalLink,
    link,
    mailchimp,
    page,
    portableText,
    route,
    simplePortableText,
    siteConfig,
    textSection
  ])
})
