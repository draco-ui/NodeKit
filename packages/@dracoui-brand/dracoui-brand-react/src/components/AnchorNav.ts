import React from 'react';
import {
  DracoAnchorNav,
  DracoAnchorNavLink,
  DracoAnchorNavAction,
} from '@dracoui-brand/lit';
import { createComponent } from '@lit/react';

const AnchorNavRoot = createComponent({
  tagName: 'draco-anchor-nav',
  elementClass: DracoAnchorNav,
  react: React,
});

const AnchorNavLink = createComponent({
  tagName: 'draco-anchor-nav-link',
  elementClass: DracoAnchorNavLink,
  react: React,
});

const AnchorNavAction = createComponent({
  tagName: 'draco-anchor-nav-action',
  elementClass: DracoAnchorNavAction,
  react: React,
});

export const AnchorNav = Object.assign(AnchorNavRoot, {
  Link: AnchorNavLink,
  Action: AnchorNavAction,
});
