import 'package:flutter/material.dart';
import 'package:snsmax/models/moment-like-history.dart';
import 'package:snsmax/provider/MomentHasLikedProvider.dart';

import 'CloudBaseDocBuilder.dart';

class MomentLikedHistoryDocBuilder extends CloudBaseDocBuilder<String,
    MomentLikeHistory, MomentHasLikedProvider> {
  const MomentLikedHistoryDocBuilder({
    Key key,
    @required String id,
    @required CloudBaseDocChildBuilder<MomentLikeHistory> builder,
    CloudBaseDocLoadingBuilder loadingBuilder,
    CloudBaseDocErrorBuilder errorBuilder,
  }) : super(
          key: key,
          id: id,
          builder: builder,
          loadingBuilder: loadingBuilder,
          errorBuilder: errorBuilder,
        );
}